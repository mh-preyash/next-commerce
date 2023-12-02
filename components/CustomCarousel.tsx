import {Navigation} from 'swiper/modules';
import {Swiper} from 'swiper/react';
import {ChevronsLeft, ChevronsRight} from 'react-feather';

interface ICustomCarousel {
  children: any,
  breakpoints: object,
  onSwiper: ()=> void,
  loop: boolean,
  autoPlay: boolean,
  spaceBetween: number,
  slidesPerView: number,
  freeMode: boolean,
  watchSlidesProgress: boolean,
  modules: [Navigation],
  className: string,
  parentContainerClassName: string
}

export default function CustomCarousel({
  children,
  breakpoints,
  onSwiper,
  loop,
  autoPlay = false,
  spaceBetween = 6,
  slidesPerView = 1,
  freeMode = true,
  watchSlidesProgress = true,
  modules = [Navigation],
  className = 'mySwiper',
  parentContainerClassName = 'container-box'
}: ICustomCarousel) {
  return (
    <div className={`${parentContainerClassName} relative px-2 py-2`}>
      <Swiper
        onSwiper={onSwiper}
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        freeMode={freeMode}
        watchSlidesProgress={watchSlidesProgress}
        modules={modules}
        lazy={'true'}
        updateOnWindowResize={true}
        pagination={{
          clickable: true
        }}
        noSwiping={false}
        navigation={{
          nextEl: `.${parentContainerClassName}-arrow-right`,
          prevEl: `.${parentContainerClassName}-arrow-left`,
          disabledClass: 'opacity-0 cursor-auto pointer-events-none'
        }}
        breakpoints={breakpoints}
        className={className}
        autoplay={autoPlay}
      >
        {children}
      </Swiper>
      <button className={`${parentContainerClassName}-arrow-left arrow`}>
        <ChevronsLeft />
      </button>
      <button className={`${parentContainerClassName}-arrow-right arrow`}>
        <ChevronsRight />
      </button>
    </div>
  );
}
