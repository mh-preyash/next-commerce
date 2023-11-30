'use client';
import CustomButton from '@/components/CustomButton';
import Filters from 'components/Filters';
import { Suspense, useState } from 'react';
import { Sliders } from 'react-feather';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <Suspense>
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="flex justify-center md:hidden">
          <CustomButton variant="light" onClick={() => setShow(!show)}>
            Filters <Sliders />
          </CustomButton>
        </div>
        <div className="relative flex flex-col gap-8 pb-4 text-primary dark:text-white md:flex-row">
          <div
            className={`order-first ${
              show ? 'absolute left-0 top-0 z-10 block h-full w-[250px] bg-[#FAFAFA]' : 'hidden'
            }  w-full max-w-[250px] flex-none md:block`}
          >
            <Filters />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        </div>
      </div>
    </Suspense>
  );
}
