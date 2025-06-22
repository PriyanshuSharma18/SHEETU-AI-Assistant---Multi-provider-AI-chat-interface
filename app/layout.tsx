import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHEETU',
  description:
    'SHEETU is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
  generator: 'Rohan Sharma',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'SHEETU',
    siteName: 'SHEETU-sharma',
    url: 'https://SHEETU-sharma.vercel.app/',
    description:
      'SHEETU is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SHEETU AI Chatbot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHEETU',
    description:
      'SHEETU is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    images: ['/og-image.jpg'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
