import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job board',
  description: 'Simple home page for job board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-brand-black">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
