export function getStagePrice(stage: number): number {
  // Base price: 0.001 USDC
  const basePrice = 0.001
  // Increment: 0.0001 per stage
  const increment = 0.0001
  
  return basePrice + ((stage - 1) * increment)
}

export function calculateQty(amount: number, price: number): number {
  return amount / price
}

export function formatUSDC(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  }).format(amount)
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(amount)
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function formatShortDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export function formatInvoiceId(id: string): string {
  return `INV-${id.slice(-8).toUpperCase()}`
}

export function isExpired(expiresAt: string): boolean {
  return new Date() > new Date(expiresAt)
}
