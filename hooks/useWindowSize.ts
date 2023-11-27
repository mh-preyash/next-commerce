'use client';
import { useEffect, useRef } from 'react';

export const useWindowSize = () => {
  const screenSize = useRef<number>(0);
  useEffect(() => {
    function updateSize() {
      screenSize.current = window.innerWidth;
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return screenSize?.current;
};
