export function isAdminUser(userId: string | null | undefined): boolean {
  if (!userId) return false
  
  const adminUserIds = process.env.ADMIN_USER_IDS
  if (!adminUserIds) return false
  
  const adminIds = adminUserIds.split(',').map(id => id.trim()).filter(id => id.length > 0)
  return adminIds.includes(userId)
}
