'use client'

import { CheckCircle, Clock, XCircle, AlertTriangle } from 'lucide-react'

interface AdminStatusBadgeProps {
  status: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AdminStatusBadge({ status, size = 'md' }: AdminStatusBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'DRAFT':
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          icon: Clock,
          label: 'Draft'
        }
      case 'PENDING_PAYMENT':
        return {
          bg: 'bg-yellow-500/10',
          border: 'border-yellow-500/50',
          text: 'text-yellow-400',
          icon: Clock,
          label: 'Pending Payment'
        }
      case 'AWAITING_VERIFICATION':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/50',
          text: 'text-amber-400',
          icon: AlertTriangle,
          label: 'Awaiting Verification'
        }
      case 'VERIFIED':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/50',
          text: 'text-green-400',
          icon: CheckCircle,
          label: 'Verified'
        }
      case 'REJECTED':
        return {
          bg: 'bg-red-500/10',
          border: 'border-red-500/50',
          text: 'text-red-400',
          icon: XCircle,
          label: 'Rejected'
        }
      case 'EXPIRED':
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          icon: XCircle,
          label: 'Expired'
        }
      case 'VOID':
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          icon: XCircle,
          label: 'Void'
        }
      case 'OPEN':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/50',
          text: 'text-blue-400',
          icon: AlertTriangle,
          label: 'Open'
        }
      case 'IN_REVIEW':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/50',
          text: 'text-amber-400',
          icon: Clock,
          label: 'In Review'
        }
      case 'RESOLVED':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/50',
          text: 'text-green-400',
          icon: CheckCircle,
          label: 'Resolved'
        }
      case 'CLOSED':
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          icon: XCircle,
          label: 'Closed'
        }
      default:
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/50',
          text: 'text-gray-400',
          icon: Clock,
          label: status
        }
    }
  }

  const config = getStatusConfig(status)
  const Icon = config.icon

  return (
    <div className={`inline-flex items-center gap-2 ${sizeClasses[size]} ${config.bg} ${config.border} border rounded-full`}>
      <Icon className="w-3 h-3" />
      <span className={`font-medium ${config.text}`}>
        {config.label}
      </span>
    </div>
  )
}
