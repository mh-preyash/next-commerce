export default function CustomVideo({
  url = '',
  className = '',
  iframeParentclassName = '',
  children,
  id,
  htmlVideo,
  videoClasses,
  iframeClassName = '',
  loading = 'lazy',
  eleId,
  controls,
  autoPlay = false,
}) {
  return (
    <div className={`w-full h-full ${className}`}>
      {htmlVideo ? (
        <video
          loop
          autoPlay={autoPlay}
          muted
          playsInline
          preload="auto"
          src={url}
          loading={loading}
          className={videoClasses}
          id={eleId}
          controls={controls}
        ></video>
      ) : (
        <div
          className={`relative pt-[56.25%] ${iframeParentclassName}`}
        >
          <iframe
            loading={loading}
            allow="autoplay; fullscreen"
            className={`absolute top-0 left-0 h-full w-full ${iframeClassName}`}
            src={
              url ||
              `https://player.vimeo.com/video/${id}?autoplay=0&loop=1&autopause=1`
            }
          />
          {children}
        </div>
      )}
    </div>
  );
}
