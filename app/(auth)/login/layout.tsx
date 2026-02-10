import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - TPC Global',
  description: 'Masuk ke akun TPC Global Anda',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
