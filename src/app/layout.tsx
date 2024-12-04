import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/features/Header';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'IMDB Clone',
  description: 'This is a movie database clone',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
