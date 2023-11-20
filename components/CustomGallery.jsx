import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { XCircle } from "react-feather";
import ImageGallery from "react-image-gallery";

const CustomGallery = ({
  data,
  setOpen,
  showPlayButton = true,
  showFullscreenButton = true,
}) => {
  const ref = useRef(null)

  // ref.current.slideToIndex()

  return ReactDOM.createPortal(
    <div
      className="z-[99999] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-10/12"
      onClick={(e) => e?.stopPropagation()}
    >
      <div
        className="cursor-pointer fixed top-[-25px] right-0 text-white flex items-center hover:bg-white hover:text-black px-2 py-1 rounded-md z-10 group"
        onClick={() => setOpen(false)}
      >
        <XCircle className="invert sm:right-2 w-8 h-auto text-black group-hover:text-white mr-1" />
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
