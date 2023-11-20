import UseLazyLoad from '../utilities/useLazyLoad';

export const LazyLoadComponent = ({children, className}) => {
  const [elementRef, isVisible] = UseLazyLoad({threshold: 0.1});

  return (
    <div className={className} ref={elementRef}>
      {isVisible ? children : null}
    </div>
  );
};
