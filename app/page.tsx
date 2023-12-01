// 'use client'
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Suspense } from 'react';

export const runtime = 'edge';

const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  openGraph: {
    type: 'website'
  }
};

const playerBreakpoints = {
  640: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 4
  }
};

const carousel_images = [
  '/9round.webp',
  '/adt.webp',
  '/ambition-dance.webp',
  '/american-theater.webp',
  '/ati.webp',
  '/barre-body.webp',
  '/barremethod.webp',
  '/bluegrass.webp',
  '/boise-ballet-academy.webp',
  '/brass-city-ballet.webp',
  '/broadway-dance-center.webp',
  '/cko.webp',
  '/crunch-fitness-logo.webp',
  '/dance-academy-cedar-rapids.webp',
  '/golds-gym.webp',
  '/goodlife.webp',
  '/joffrey.webp',
  '/lifetime.webp',
  '/riverfront-athletic-club.webp',
  '/sab.webp',
  '/work-out-world.webp',
  '/ymca.webp'
];

export default function HomePage() {
  return (
    <>
      {/* <CustomCarousel breakpoints={playerBreakpoints} parentContainerClassName="ShopUGCSlider">
        {(CAROUSEL_STATIC_IMAGES || []).map((item, index) => (
          <SwiperSlide key={`${item}-${index}`}>
            <CustomImage
              src={item}
              className="h-[350px] w-[350px] rounded object-cover"
              alt="carousel image"
            />
          </SwiperSlide>
        ))}
      </CustomCarousel> */}
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  );
}
