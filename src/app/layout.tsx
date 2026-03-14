import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/index.scss';

const atRotisSemiSans = localFont({
  variable: '--font-atrotis-semi-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/ATRotisSemiSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Blackwell Invest By Blackwell Global',
  description:
    'Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={atRotisSemiSans.variable}>{children}</body>
    </html>
  );
}
