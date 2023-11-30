'use client'
import CustomImage from "@/components/CustomImage";
import CustomCarousel from '@/components/CustomCarousel';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';

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

const CAROUSEL_STATIC_IMAGES = [
  '/carousel-images/WoKo-Lifestyle-17-scaled.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.41.55-AM.webp',
  '/carousel-images/WoKo-Lifestyle-9-scaled.webp',
  '/carousel-images/WoKo-Lifestyle2-7-scaled.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.46.21-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.45.04-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.44.04-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.37.36-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.38.00-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.35.31-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.34.05-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.32.18-AM.webp',
  '/carousel-images/Screenshot-2023-09-18-at-9.31.15-AM.webp',
  '/carousel-images/Miss-Fitness-IMG-1.webp',
  '/carousel-images/Jean-Fernandez-IMG-3.webp',
  '/carousel-images/IMG_6562-1-scaled.webp'
];

export default function HomePage() {
  return (
    <>
      <CustomCarousel breakpoints={playerBreakpoints} parentContainerClassName="ShopUGCSlider">
        {(CAROUSEL_STATIC_IMAGES || []).map((item, index) => (
          <SwiperSlide key={`${item}-${index}`}>
            <CustomImage
              src={item}
              className="h-[350px] w-[350px] rounded object-cover"
              alt="carousel image"
            />
          </SwiperSlide>
        ))}
      </CustomCarousel>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  );
}
