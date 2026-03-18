import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';
import { SideMenu } from '@/components/ui/side-menu';
import { Sidebar } from '@/components/ui/sidebar';
import { AppContextProvider } from '@/context/app-context';
import { routing } from '@/i18n/routing';
import '@/styles/index.scss';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

const atRotisSemiSans = localFont({
  variable: '--font-atrotis-semi-sans',
  display: 'swap',
  src: [
    {
      path: '../../../public/fonts/ATRotisSemiSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/ATRotisSemiSans-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/ATRotisSemiSans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/ATRotisSemiSans.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/ATRotisSemiSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/ATRotisSemiSans-Light.woff',
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={atRotisSemiSans.variable}>
        <AppContextProvider>
          <NextIntlClientProvider>
            {children}
            <ScrollToTopButton />
            <Sidebar>
              <SideMenu />
            </Sidebar>
          </NextIntlClientProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
