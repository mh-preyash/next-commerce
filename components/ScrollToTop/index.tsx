'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';

export const ScrollToTop = () => {
  const goToTop = () => {
    const ele = document.getElementById('__next');
    if (ele) ele.scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (typeof window !== 'undefined' && document.scrollingElement !== null) {
        const scrolled = document.scrollingElement.scrollTop;
        setScrollState(scrolled >= 120);
      }
    };
    document.addEventListener('scroll', scrollListener);
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [scrollState]);

  return scrollState ? (
    <div
      onClick={goToTop}
      className="fixed bottom-0 right-0 z-[999] m-5 cursor-pointer rounded-full border-2 bg-primary p-4 text-white"
    >
      <ArrowUp />
    </div>
  ) : null;
};
