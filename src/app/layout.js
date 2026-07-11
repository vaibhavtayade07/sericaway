import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export const metadata = {
  title: {
    default: 'Sericaway | AI Automation Consultancy',
    template: '%s | Sericaway',
  },
  description:
    'Sericaway builds AI agents, workflow automation, AI chatbots, and intelligent business systems that help companies scale faster.',
  keywords: [
    'AI automation',
    'AI agents',
    'workflow automation',
    'AI chatbots',
    'RAG systems',
    'business automation',
    'Sericaway',
  ],
  authors: [{ name: 'Sericaway' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sericaway.com',
    siteName: 'Sericaway',
    title: 'Sericaway | AI Automation Consultancy',
    description:
      'We build AI agents and automation systems that remove repetitive work and help businesses scale with confidence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sericaway | AI Automation Consultancy',
    description:
      'We build AI agents and automation systems that remove repetitive work and help businesses scale with confidence.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090909',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CursorGlow />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}