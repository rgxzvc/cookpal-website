import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with CookPal. Find answers to common questions or contact our support team.',
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
