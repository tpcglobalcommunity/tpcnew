// Health Check API Route
// Returns system status for monitoring

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const checks: Record<string, { status: string; responseTime?: number; error?: string }> = {};
  let overallStatus = 'healthy';

  // Check Supabase connection
  try {
    const supabaseStart = Date.now();
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.from('tpc_invoices').select('id').limit(1);
    
    if (error) throw error;
    
    checks.database = {
      status: 'ok',
      responseTime: Date.now() - supabaseStart,
    };
  } catch (error: any) {
    checks.database = {
      status: 'error',
      error: error.message,
    };
    overallStatus = 'unhealthy';
  }

  // Check API endpoints
  checks.api = {
    status: 'ok',
    responseTime: Date.now() - startTime,
  };

  // Memory usage
  const memoryUsage = process.memoryUsage();

  const response = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    checks,
    metrics: {
      memory: {
        used: Math.round(memoryUsage.heapUsed / 1024 / 1024) + 'MB',
        total: Math.round(memoryUsage.heapTotal / 1024 / 1024) + 'MB',
      },
      responseTime: Date.now() - startTime + 'ms',
    },
  };

  const statusCode = overallStatus === 'healthy' ? 200 : 503;

  return NextResponse.json(response, { status: statusCode });
}

// Allow POST for monitoring tools that require it
export async function POST() {
  return GET({} as NextRequest);
}
