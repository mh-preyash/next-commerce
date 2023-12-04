'use client';
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { Menu, Phone, User } from 'react-feather';
import { useWindowSize } from '../hooks/useWindowSize';
import { Routes, links, mobileLinks } from '../utils';
import CustomDropdown from './CustomDropdown';
import CustomImage from './CustomImage';
import CustomLink from './CustomLink';
import Typography from './Typography';
import Search from './layout/navbar/search';

export interface IMenu {
  title: string;
  path: string;
  children: IMenuChildItem[];
}

export interface IMenuChildItem {
  hasChildren: boolean;
  entityId: number;
  name: string;
  path: string;
  children?: IMenuChildItem[];
}
interface INavbarMenu {
  menu: IMenu;
  children: ReactNode
}

export default function NavbarMenu({ children, menu }: INavbarMenu) {
  console.log(`🚀 ~ NavbarMenu ~ menu:`, menu);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState({});
  const navbarToggle = () => setOpen(!open);
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('only screen and (max-width: 768px)').matches;
  const isLaptop =
    typeof window !== 'undefined' &&
    window.matchMedia('only screen and (max-width: 1024px)').matches;

  const size = useWindowSize();

  useEffect(() => {
    setOpen(open && size > 1023);
  }, [size, open]);

  return (
    <>
      <Navbar
        height="none"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        className={`bg-white fixed py-3 drop-shadow-sm backdrop-blur-lg transition-all duration-100 ease-linear`}
      >
        <NavbarContent className="w-full ">
          <NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="h-11  w-11 rounded-md border border-neutral-200 lg:hidden "
              icon={<Menu className={`w-4`} />}
            />
          </NavbarItem>
          <CustomLink href={Routes.home}>
            <CustomImage
              src="/vita_logo_light.webp"
              width={260}
              height={45}
              alt="logo"
              loading={'eager'}
            />
          </CustomLink>
        </NavbarContent>
        <NavbarItem >
          <div className="hidden lg:block">
            <Search />
          </div>
          {/* <CustomInput
            size="sm"
            variant="bordered"
            placeholder="Search the store"
            endContent={
              <CustomButton className="focus:outline-none" size="sm">
                Search
              </CustomButton>
            }
            className="hidden max-w-xs lg:block"
          /> */}
        </NavbarItem>
        <NavbarContent justify="end" className="space-x-1">
          <NavbarItem className="hidden items-center space-x-2 lg:flex">
            <Phone className="h-4 w-4" />
            <CustomLink href="tel:864-288-8934">
              <Typography variant="small">864-288-8934</Typography>
            </CustomLink>
          </NavbarItem>
          <div className="flex lg:hidden">
            <Search />
          </div>
          <CustomLink href={Routes.signIn}>
            <User className={`w-4 cursor-pointer text-slate-500 sm:w-6`} />
          </CustomLink>
          {children}
          <CustomImage
            width={80}
            height={32}
            src="/usa-about-us.webp"
            className="hidden sm:block"
          />
        </NavbarContent>
      </Navbar>
      <header
        className={`sticky top-[65px] z-40 w-full flex-wrap border-t-1 text-lg shadow drop-shadow-sm backdrop-blur-lg transition-all duration-100 ease-linear sm:flex-nowrap sm:justify-start md:text-base`}
      >
        <nav className="relative mx-auto flex w-full max-w-[1536px] items-center justify-between px-4">
          <div
            className={`${isMenuOpen && isMobile ? 'overflow-auto' : ''} ${!isMenuOpen ? 'hidden lg:flex' : ''
              }  h-screen w-full flex-col items-center divide-y divide-solid divide-gray-200 sm:mt-0 md:w-full lg:h-auto lg:flex-row lg:divide-none xl:justify-center`}
          >
            {(isLaptop ? mobileLinks : links || []).map((item, index) => (
              <div
                key={index}
                className={`inline-flex w-full justify-start border-transparent px-4 py-1 lg:flex lg:w-auto lg:justify-start ${item?.url == pathname && typeof item.subLinks === 'undefined'
                  ? ' md:border-indigo-700'
                  : ''
                  } `}
              >
                {typeof item.subLinks === 'undefined' ? (
                  <li
                    onClick={navbarToggle}
                    key={item?.name}
                    className={` mb-1 block rounded px-2 pb-2 pt-3 text-sm font-bold uppercase md:bg-transparent lg:font-medium xl:px-3`}
                  >
                    <CustomLink
                      href={item?.url || '/'}
                      className={` ${item?.url === pathname ? 'text-indigo-700' : ''
                        } text-primary hover:text-indigo-700`}
                      aria-current="page"
                    >
                      {item?.name}
                    </CustomLink>
                  </li>
                ) : item?.subLinks && item?.subLinks.length ? (
                  <CustomDropdown
                    obj={item}
                    index={index}
                    navbarToggle={navbarToggle}
                    setToggleDropdown={setToggleDropdown}
                    toggleDropdown={toggleDropdown}
                  />
                ) : null}
              </div>
            ))}
            <CustomImage
              className="mx-auto block lg:hidden"
              height={18}
              width={120}
              src="/vitavibe-cinnabar-new.webp"
            />
          </div>
          <CustomImage
            className="absolute right-[-30px] hidden lg:block"
            height={18}
            width={120}
            src="/vitavibe-cinnabar-new.webp"
          />
        </nav>
      </header>
    </>
  );
}
