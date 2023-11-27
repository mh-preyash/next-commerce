'use client';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface IUseLazyLoad {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useLazyLoad = (options: IUseLazyLoad): [MutableRefObject<null>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
