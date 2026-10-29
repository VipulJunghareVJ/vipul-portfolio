import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const themeScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme-preference');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL('https://vipuljunghare.com'),
  title: 'Vipul Junghare | Data Engineer',
  description:
    'Data Engineer specializing in SQL, PostgreSQL, ETL pipelines, data warehousing, PySpark, and real-time analytics systems.',
  keywords: [
    'Data Engineer',
    'Big Data',
    'ETL',
    'PySpark',
    'Apache Kafka',
    'Data Warehousing',
    'PostgreSQL',
    'GCP',
    'AWS',
  ],
  openGraph: {
    type: 'website',
    title: 'Vipul Junghare | Data Engineer',
    description:
      'Data Engineer specializing in SQL, PostgreSQL, ETL pipelines, data warehousing, PySpark, and real-time analytics systems.',
    url: 'https://vipuljunghare.com',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vipul Junghare | Data Engineer',
    description:
      'Data Engineer specializing in SQL, PostgreSQL, ETL pipelines, data warehousing, PySpark, and real-time analytics systems.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
