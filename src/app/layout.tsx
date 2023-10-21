import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar/sidebar';
import classes from './page.module.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Hydra Dashboard',
  description: 'An app for managing dark forces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='container'>
          <aside className={classes.aside}>
            <Sidebar />
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
