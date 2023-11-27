'use client';
import {
  Dropdown,
  DropdownTrigger,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Menu, Phone, Search, User } from 'react-feather';
import { Routes, links, mobileLinks, useWindowSize } from '../utils';
import CustomButton from './CustomButton';
import CustomDropdown from './CustomDropdown';
import CustomImage from './CustomImage';
import CustomInput from './CustomInput';
import CustomLink from './CustomLink';
import Typography from './Typography';
import Cart from './cart/index';
import OpenCart from './cart/open-cart';

const noHeaderPages = [
  Routes.shop,
  Routes.reviews,
  Routes.myAccount,
  Routes.login,
  Routes.register,
  Routes.recover,
  Routes.marketing,
  Routes.cart,
  Routes.returnPolicy,
  Routes.privacyPolicy
];

export default function CustomNavbar({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const pathname = usePathname();
  const showNavbar = scrollState || noHeaderPages.includes(pathname);
  const [open, setOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState({});
  const navbarToggle = () => setOpen(!open);
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('only screen and (max-width: 768px)').matches;
  const isLaptop =
    typeof window !== 'undefined' &&
    window.matchMedia('only screen and (max-width: 1024px)').matches;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleListener = () => {
        const scrolled = window.scrollY;
        setScrollState(scrolled >= 120);
      };
      handleListener();
      document.addEventListener('scroll', handleListener);
      return () => {
        document.removeEventListener('scroll', handleListener);
      };
    }
  }, []);

  const size = useWindowSize();

  useEffect(() => {
    setOpen(open && size > 1023);
  }, [size,open]);

  return (
    <>
      <Navbar
        height="none"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        className={`fixed z-[99] bg-[#c4daf1e6] py-4 drop-shadow-sm backdrop-blur-lg transition-all duration-100 ease-linear`}
      >
        <NavbarContent className="w-full ">
          <Dropdown className="w-full">
            <NavbarItem>
              <DropdownTrigger>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  className="lg:hidden"
                  icon={<Menu className={`w-4 text-slate-500 sm:w-6`} />}
                />
              </DropdownTrigger>
            </NavbarItem>
          </Dropdown>
          <CustomLink href={Routes.home}>
            <CustomImage
              src="/vita_logo_light.webp"
              width={140}
              height={24}
              alt="logo"
              loading={'eager'}
            />
          </CustomLink>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden items-center space-x-2 lg:flex ">
            <NavbarItem>
              <CustomInput
                size="sm"
                variant="bordered"
                placeholder="Search the store"
                endContent={
                  <CustomButton className="focus:outline-none" size="sm">
                    Search
                  </CustomButton>
                }
                className="max-w-xs"
              />
            </NavbarItem>
            <NavbarItem className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <CustomLink href="tel:864-288-8934">
                <Typography variant="small">864-288-8934</Typography>
              </CustomLink>
            </NavbarItem>
          </NavbarItem>
          <CustomLink href={Routes.myAccount} className="flex lg:hidden">
            <Search className={`w-4 cursor-pointer text-slate-500 sm:w-6`} />
          </CustomLink>
          <CustomLink href={Routes.myAccount}>
            <User className={`w-4 cursor-pointer text-slate-500 sm:w-6`} />
          </CustomLink>
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
          <CustomImage
            width={80}
            height={32}
            src="/usa-about-us.webp"
            className="hidden sm:block"
          />
        </NavbarContent>
      </Navbar>
      <header
        className={`sticky top-[80px] z-[100] w-full flex-wrap border-b-0 border-[#dfe3e7] bg-[#ffffff90] text-lg drop-shadow-sm backdrop-blur-lg transition-all duration-100 ease-linear sm:flex-nowrap sm:justify-start md:text-base lg:border-b`}
      >
        <nav className="relative mx-auto flex w-full max-w-[1536px] items-center justify-between px-6">
          <div
            className={`${isMenuOpen && isMobile ? 'overflow-auto pb-48' : ''} ${
              !isMenuOpen ? 'hidden' : ''
            } my-0 flex h-screen w-full grow basis-full justify-center lg:static lg:block lg:h-auto lg:bg-transparent`}
          >
            <div className="flex w-full flex-col items-center divide-y divide-solid divide-black sm:mt-0 md:w-full lg:flex-row lg:divide-none">
              {(isLaptop ? mobileLinks : links || []).map((item, index) => (
                <div
                  key={index}
                  className={`inline-flex w-full justify-start border-b-[3px] border-transparent lg:flex lg:w-auto lg:justify-start ${
                    item?.url == pathname && typeof item.subLinks === 'undefined'
                      ? 'border-b-[3px] md:border-indigo-700'
                      : ''
                  } `}
                >
                  {typeof item.subLinks === 'undefined' ? (
                    <li
                      onClick={navbarToggle}
                      key={item?.name}
                      className={` mb-1 block rounded px-2 pb-2 pt-3 text-sm font-bold uppercase md:bg-transparent lg:text-base lg:font-medium xl:px-3`}
                    >
                      <CustomLink
                        href={item?.url || '/'}
                        className={` ${
                          item?.url === pathname ? 'text-indigo-700' : ''
                        } text-black hover:text-indigo-700`}
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
                      showNavbar={showNavbar}
                    />
                  ) : null}
                </div>
              ))}
              <CustomImage
                className="block lg:hidden"
                height={18}
                width={120}
                src="/vitavibe-cinnabar-new.webp"
              />
            </div>
          </div>
          <CustomImage
            className="hidden lg:block"
            height={18}
            width={120}
            src="/vitavibe-cinnabar-new.webp"
          />
        </nav>
      </header>
    </>
  );
}