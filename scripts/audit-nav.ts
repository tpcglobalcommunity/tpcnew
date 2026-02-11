const fs = require('fs');
const path = require('path');

const FORBIDDEN_PATTERNS = ['NAVIGASI UTAMA', 'INFORMASI', 'LEGAL', 'SUPPORT', 'AKUN'];
const IGNORE_DIRS = new Set(['node_modules', '.next', '.git', 'dist', 'build', 'out']);

const ALLOWLIST_FILES = new Set([
  'src/components/navigation/SideMenuDrawer.tsx',
  'src/components/navigation/LegalFooter.tsx',
  'src/config/navigation.ts',
]);

const REQUIRED_COMPONENTS = [
  'src/components/navigation/SideMenuDrawer.tsx',
  'src/components/navigation/LegalFooter.tsx',
];

function normalizePath(p: string): string {
  return p.replace(/\\/g, '/');
}

function shouldAuditFile(filePath: string): boolean {
  const p = normalizePath(filePath);
  return p.endsWith('page.tsx') || p.endsWith('layout.tsx') || p.endsWith('template.tsx');
}

function scanRecursive(dir: string, patterns: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      results = results.concat(scanRecursive(fullPath, patterns));
      continue;
    }

    if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const normalized = normalizePath(fullPath);

      if (!shouldAuditFile(normalized)) continue;
      if (ALLOWLIST_FILES.has(normalized)) continue;

      const content = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          results.push(`${normalized}: ${pattern}`);
        }
      }
    }
  }

  return results;
}

function main() {
  console.log('🔍 TPC Navigation Audit Script');
  console.log('=====================================');

  console.log('\n🔧 Checking Required Global Components:');
  let missing = 0;
  for (const component of REQUIRED_COMPONENTS) {
    if (!fs.existsSync(component)) {
      console.log(`❌ Missing: ${component}`);
      missing++;
    } else {
      console.log(`✅ Found: ${component}`);
    }
  }
  if (missing > 0) process.exit(1);

  const roots = ['app', 'src'];
  let totalViolations = 0;

  for (const root of roots) {
    console.log(`\n📁 Scanning recursively: ${root}`);
    const violations = scanRecursive(root, FORBIDDEN_PATTERNS);

    if (violations.length > 0) {
      console.log('❌ VIOLATIONS FOUND:');
      violations.forEach((v: string) => console.log(`   ${v}`));
      totalViolations += violations.length;
    } else {
      console.log('✅ No violations found');
    }
  }

  console.log('\n📊 AUDIT SUMMARY:');
  console.log(`Total violations: ${totalViolations}`);

  if (totalViolations > 0) {
    console.log('❌ AUDIT FAILED');
    process.exit(1);
  }

  console.log('✅ AUDIT PASSED');
  process.exit(0);
}

main();
