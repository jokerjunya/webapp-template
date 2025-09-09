import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'WebApp Template',
    template: '%s | WebApp Template',
  },
  description: 'A modern web application template built with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Template'],
  authors: [{ name: 'jokerjunya' }],
  creator: 'jokerjunya',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://webapp-template.vercel.app',
    title: 'WebApp Template',
    description: 'A modern web application template built with Next.js, TypeScript, and Tailwind CSS',
    siteName: 'WebApp Template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebApp Template',
    description: 'A modern web application template built with Next.js, TypeScript, and Tailwind CSS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
