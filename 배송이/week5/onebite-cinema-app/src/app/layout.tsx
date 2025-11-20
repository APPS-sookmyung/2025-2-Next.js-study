// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Onebite Cinema',
  description: 'App Router practice',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>
          <strong>Global Layout</strong>
        </div>
        <main style={{ padding: 12 }}>{children}</main>
      </body>
    </html>
  )
}