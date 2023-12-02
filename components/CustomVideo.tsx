import { ReactNode } from 'react';

interface ICustomVideo {
  url?: string;
  className?: string;
  iframeParentclassName?: string;
  children?: ReactNode;
  id?: string;
  htmlVideo?: boolean;
  rest?: object;
  videoClasses?: string;
  iframeClassName?: string;
  eleId?: string;
  controls?: boolean;
  autoPlay?: boolean;
}

export default function CustomVideo({
  url = '',
  className = '',
  iframeParentclassName = '',
  children,
  id,
  htmlVideo,
  videoClasses,
  iframeClassName = '',
  eleId,
  controls,
  autoPlay = false
}: ICustomVideo) {
  return (
    <div className={`h-fill w-full ${className}`}>
      {htmlVideo ? (
        <video
          loop
          autoPlay={autoPlay}
          muted
          playsInline
          preload="auto"
          src={url}
          className={videoClasses}
          id={eleId}
          controls={controls}
        ></video>
      ) : (
        <div className={`relative pt-[56.25%] ${iframeParentclassName}`}>
          <iframe
            allow="autoplay; fullscreen"
            className={`absolute left-0 top-0 h-full w-full ${iframeClassName}`}
            src={url || `https://player.vimeo.com/video/${id}?autoplay=0&loop=1&autopause=1`}
          />
          {children}
        </div>
      )}
    </div>
  );
}
