'use client';
import { RefObject, useEffect } from 'react';

export const useOutsideAlerter = (ref: RefObject<HTMLElement>): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        ref?.current?.classList.add('hidden');
        if (ref?.current?.previousSibling) {
          const arrow = ref?.current?.previousSibling.querySelector('svg');
          arrow?.classList?.remove('rotate-180');
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
