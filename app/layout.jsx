// app/layout.jsx
import './globals.css'
import ClientLayout from './components/ClientLayout'

export const metadata = {
  title: 'Shreeji Construction',
  description: 'Trusted Building Solutions',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

