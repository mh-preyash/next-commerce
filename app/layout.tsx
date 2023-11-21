'use client';
import './globals.css';
import { ensureStartsWith } from 'lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
import { Routes } from '../utils';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';
import Typography from '../components/Typography';

const noHeadingPaths = [Routes.blogDetails];

const noContainerPage = [Routes.shop, Routes.commercialSales];

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const goToTop = () => {
    const ele = document.getElementById('__next');
    if (ele) ele.scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    let listener = null;
    listener = document.addEventListener('scroll', () => {
      var scrolled = document.scrollingElement.scrollTop;
      setScrollState(scrolled >= 120);
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  return (
    <html lang="en" className={inter.variable} id="__next">
      <NextUIProvider>
        <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
          <CustomNavbar />
          <div
            className={`${
              noContainerPage.includes(pathname) ? '' : 'max-w-[1536px] px-6'
            } mx-auto mb-[50px] mt-[150px]`}
          >
            {scrollState ? (
              <div
                onClick={goToTop}
                className="fixed bottom-0 right-0 z-[999] m-5 cursor-pointer rounded-full border-2 bg-primary p-4 text-white"
              >
                <ArrowUp />
              </div>
            ) : null}
            <div className="space-y-3">
              <Breadcrumbs variant="solid" className="flex justify-center md:justify-start">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Music</BreadcrumbItem>
                <BreadcrumbItem>Song</BreadcrumbItem>
              </Breadcrumbs>
              {!noHeadingPaths.includes(pathname) ? (
                <Typography className="text-center" variant="h1">
                  Heading
                </Typography>
              ) : null}
            </div>
            <br />
            <Suspense>
              <main>{children}</main>
            </Suspense>
          </div>
          <Footer />
        </body>
      </NextUIProvider>
    </html>
  );
}
