import CustomNavbar from '@/components/CustomNavbar';
import { CustomProviders } from '@/components/CustomProviders';
import Footer from '@/components/Footer.jsx';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Routes } from '@/utils';
import { ensureStartsWith } from 'lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';
// import { usePathname } from 'next/navigation';
// import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

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

const heroSectionPages = [Routes.infoDetails];

export default function RootLayout({ children }: { children: ReactNode }) {
  // const pathname = usePathname();
  return (
    <html lang="en" className={inter.variable} id="__next">
      <CustomProviders>
        <body className="bg-neutral-50 text-primary selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
          <CustomNavbar />
          <div
            className={`mx-auto mb-[50px] mt-[90px] md:mt-[120px]`}
            // className={`mx-auto mb-[50px] ${
            //   heroSectionPages.includes(pathname) ? 'mt-[54px]' : 'mt-[90px] md:mt-[120px]'
            // }`}
          >
            {/* <div
            className={`${
              noContainerPage.includes(pathname) ? '' : 'max-w-[1536px] px-6'
            } mx-auto mb-[50px] mt-[90px] md:mt-[120px]`}
          > */}
            <div className="space-y-3">
              {/* <Breadcrumbs variant="solid" className="flex justify-center md:justify-start">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Music</BreadcrumbItem>
                <BreadcrumbItem>Song</BreadcrumbItem>
              </Breadcrumbs> */}
              {/* {!noHeadingPaths.includes(pathname) ? (
                <Typography className="text-center" variant="h1">
                  Heading
                </Typography>
              ) : null} */}
            </div>
            <br />
            <Suspense>
              <main>{children}</main>
            </Suspense>
          </div>
          <Footer />
          <ScrollToTop />
        </body>
      </CustomProviders>
    </html>
  );
}
