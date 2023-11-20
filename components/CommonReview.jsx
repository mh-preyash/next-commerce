import Typography from './Typography';
import {TypeAnimation} from 'react-type-animation';
import CustomCarousel from './CustomCarousel';
import {SwiperSlide} from 'swiper/react';
import CustomVideo from './CustomVideo';

const playerBreakpoints = {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2.5,
  },
  1024: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 5,
  },
};

const playerIds = [
  '865585428',
  '867145058',
  '865591222',
  '867144544',
  '867144145',
  '867143755',
  '865589627',
  '865588812',
];

export default function CommonReview() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center space-y-4">
        <Typography variant="h2" className="font-bold">
          WOCO IS LOVED BY
        </Typography>
        <div className="h-[66px]">
          <TypeAnimation
            cursor={false}
            sequence={[
              'ATHLETES',
              1300,
              'PROFESSIONALS',
              1300,
              'PARENTS',
              1300,
              'INNOVATORS',
              1300,
              'ARTISTS',
              1300,
              'ENTHUSIASTS',
              1300,
            ]}
            className="text-primary font-bold text-4xl"
            wrapper="h1"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="p-12">
        <CustomCarousel breakpoints={playerBreakpoints}>
          {(playerIds || []).map((item) => (
            <SwiperSlide key={item}>
              <CustomVideo
                id={item}
                iframeParentclassName="h-[500px] rounded"
                iframeClassName="rounded-lg"
              />
              <div className="playerOverlay before:content-[''] cursor-grab w-full h-full absolute top-0 left-0 select-none z-[3] bg-[#ffffff01]"></div>
            </SwiperSlide>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
}
