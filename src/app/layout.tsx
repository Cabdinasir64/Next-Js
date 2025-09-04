import './globals.css';
import type { Metadata } from 'next'
import Navbar from './components/navbar'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html >
  );
}
