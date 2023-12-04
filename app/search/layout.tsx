'use client';
import CustomButton from '@/components/CustomButton';
import Filters from 'components/Filters';
import { Suspense, useState } from 'react';
import { Sliders } from 'react-feather';
// import { useRouter } from 'next/navigation';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  // const [searchQuery, setSearchQuery] = useState({});
  // const router = useRouter();

  // console.log(searchQuery)

  // const handleChange = (type, data, singleSelect = false) => {
  //   let filterData;
  //   if (singleSelect) {
  //     filterData = data;
  //   } else {
  //     filterData = searchQuery?.[type] || [];
  //     if (filterData && !filterData.length) {
  //       filterData.push(data);
  //     } else {
  //       const exists = filterData.some((item) => item === data);
  //       if (exists) {
  //         filterData = filterData.filter((item) => item !== data);
  //       } else {
  //         filterData.push(data);
  //       }
  //     }
  //   }
  //   let queryData = {
  //     ...searchQuery,
  //     [type]: filterData
  //   };

  //   if (filterData && !filterData.length) {
  //     delete queryData?.[type];
  //   }
  //   setSearchQuery(queryData);
  //   let query = '';
  //   const filters = Object.entries(queryData);
  //   if (filters && filters.length) {
  //     filters.forEach(([key, value], i) => {
  //       query += `${i > 0 ? '&' : ''}${key}=${Array.isArray(value) ? value.join(',') : value}`;
  //     });
  //   }
  //   router.push(`/search?${query}`);
  // };

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
            {/* onChange={handleChange} selectedFilters={searchQuery}  */}
          </div>
          <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        </div>
      </div>
    </Suspense>
  );
}
