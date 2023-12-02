import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { XCircle } from 'react-feather';
import ImageGallery from 'react-image-gallery';

interface ICustomGallery {
  data: [];
  setOpen: () => void;
  showPlayButton: boolean;
  showFullscreenButton: boolean;
}

const CustomGallery = ({
  data,
  setOpen,
  showPlayButton = true,
  showFullscreenButton = true
}: ICustomGallery) => {
  const ref = useRef(null);

  // ref.current.slideToIndex()

  return ReactDOM.createPortal(
    <div
      className="fixed left-1/2 top-1/2 z-[99999] w-11/12 -translate-x-1/2 -translate-y-1/2 md:w-10/12"
      onClick={(e) => e?.stopPropagation()}
    >
      <div
        className="group fixed right-0 top-[-25px] z-10 flex cursor-pointer items-center rounded-md px-2 py-1 text-white hover:bg-white hover:text-primary"
        onClick={() => setOpen(false)}
      >
        <XCircle className="mr-1 h-auto w-8 text-primary invert group-hover:text-white sm:right-2" />
        Close
      </div>
      <ImageGallery
        showBullets={false}
        items={data}
        lazyLoad={true}
        showThumbnails={false}
        showPlayButton={showPlayButton}
        showFullscreenButton={showFullscreenButton}
      />
    </div>,
    document?.body
  );
};

export default CustomGallery;
