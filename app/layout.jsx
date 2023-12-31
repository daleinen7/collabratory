import './globals.css';
import { NextAuthProvider } from './providers';

import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <h1>Collabratory</h1>
          <nav>
            <ul>
              <li>
                <Link href="#">Login</Link>
              </li>
              <li>
                <Link href="#">Sign up</Link>
              </li>
              <li>
                <Link href="#">Create Set</Link>
              </li>
              <li>
                <Link href="#">Edit Sets</Link>
              </li>
            </ul>
          </nav>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
