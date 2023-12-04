'use client';
import { SwiperSlide } from 'swiper/react';
import CustomCarousel from './CustomCarousel';
import CustomImage from './CustomImage';

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

export default function DashboardCarousel() {
  return (
    <CustomCarousel breakpoints={playerBreakpoints} parentContainerClassName="ShopUGCSlider">
      {(carousel_images || []).map((item, index) => (
        <SwiperSlide key={`${item}-${index}`}>
          <CustomImage
            width={225}
            height={225}
            src={item}
            className="h-[350px] w-[350px] rounded object-cover"
            alt="carousel image"
          />
        </SwiperSlide>
      ))}
    </CustomCarousel>
  );
}
