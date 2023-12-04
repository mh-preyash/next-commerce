import { usePathname } from 'next/navigation';
import { FC, useRef } from 'react';
import { ChevronDown } from 'react-feather';
import CustomLink from '../components/CustomLink';
import { useOutsideAlerter } from '../hooks/useOutsideAlerter';

interface ICustomDropdownProps {
  obj: {
    url: string;
    name: string;
    subLinks: {
      url: string;
      name: string;
    }[];
  };
  index: number;
  setToggleDropdown: (toggle: { [index: number]: boolean }) => void;
  toggleDropdown: { [index: number]: boolean };
  navbarToggle: () => void;
}

const CustomDropdown: FC<ICustomDropdownProps> = ({
  obj,
  index,
  setToggleDropdown,
  toggleDropdown,
  navbarToggle
}) => {
  const pathname: string = usePathname();

  const clickHandle: () => void = () => {
    setToggleDropdown({ [index]: !toggleDropdown[index] });
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);

  const linkClick: () => void = () => {
    setToggleDropdown({ [index]: !toggleDropdown[index] });
    navbarToggle();
  };

  return (
    <div className="group relative flex w-full flex-col items-center lg:inline-block lg:w-auto ">
      <CustomLink
        href={obj?.url}
        onClick={clickHandle}
        className={`flex w-full items-center justify-between p-2 text-sm font-bold uppercase text-primary hover:text-indigo-700 md:hover:bg-gray-100 md:hover:rounded-full lg:justify-start lg:font-medium xl:px-3 ${obj.subLinks.some((s) => s?.url.toLowerCase() === pathname.toLowerCase())
          ? 'border-indigo-700 text-indigo-700'
          : 'border-transparent'
          }`}
      >
        {obj.name}{' '}
        <ChevronDown
          className={`ml-1 h-5 w-5 group-hover:rotate-180 rotate-[270deg] lg:rotate-0`}
        />
      </CustomLink>
      <div
        ref={wrapperRef}
        className="absolute hidden w-[300px] divide-y divide-gray-100 border bg-[#F1F1F1] font-normal group-hover:flex lg:rounded-lg lg:bg-white"
      >
        <div className="z-[99999999] flex w-full flex-col items-start justify-start space-y-1 divide-y divide-solid divide-primary  p-2 text-sm text-gray-700 group-hover:block lg:items-start lg:justify-start lg:divide-none">
          {(obj.subLinks || []).map((sublink, index) => (
            <li
              key={index}
              className="flex w-full justify-start rounded-sm md:bg-transparent lg:block"
              onClick={linkClick}
            >
              <CustomLink
                href={sublink?.url || '/'}
                className={`flex w-full gap-x-3.5 rounded-md px-3 py-2 text-sm font-bold uppercase hover:bg-gray-100 lg:font-medium ${sublink?.url === pathname ? 'bg-gray-100  text-indigo-700 ' : ''
                  } hover:text-indigo-700`}
              >
                {sublink?.name}
              </CustomLink>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
