import './globals.css'

export const metadata = {
  title: 'Pinboard',
  description: 'A Next.js pinboard, deployed on a Raspberry Pi with piway',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
