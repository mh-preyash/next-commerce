import { useLazyLoad } from '@/hooks/useLazyLoad';

export const LazyLoadComponent = ({ children, className }) => {
  const [elementRef, isVisible] = useLazyLoad({ threshold: 0.1 });

  return (
    <>
      <div className={className} ref={elementRef}>
        {isVisible ? children : null}
      </div>
    </>
  );
};
