'use client';
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, Search, ShoppingCart, User } from 'react-feather';
import { Routes, navLinks, useWindowSize } from '../utils';
import CustomLink from './CustomLink';
import Typography from './Typography';
import CustomImage from './CustomImage';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showNavbar = scrollState || noHeaderPages.includes(pathname);

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
  }, [size]);

  return (
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
                className="md:hidden"
                icon={<Menu className={`w-4 text-slate-400 sm:w-6`} />}
              />
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            itemClasses={{
              base: 'gap-4'
            }}
          >
            {(navLinks || []).map((item, index) => (
              <DropdownItem key={`mobile-nav-${item?.url}-${index}`}>
                <CustomLink href={item?.url}>
                  <Typography
                    className={`py-4 text-[16px] uppercase hover:text-primary ${
                      item?.url === pathname ? '!font-bold text-primary' : ''
                    }`}
                  >
                    {item?.name}
                  </Typography>
                </CustomLink>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <CustomLink href={Routes.home}>
          <CustomImage
            src="/vita_logo_light.webp"
            className="h-[20px] w-[100px] sm:h-[24px] sm:w-[140px] "
            width={140}
            height={24}
            alt="logo"
            loading={'eager'}
          />
        </CustomLink>
      </NavbarContent>
      {/* <NavbarContent className="md:gap-16 xl:gap-24" justify="center">
        {(navLinks || []).map((item, index) => {
          const isLogo = item?.name === 'logo';
          return isLogo ? (
            <NavbarItem
              key={`nav-main-${item?.url}-${index}`}
              className={`hidden h-full w-full md:flex md:h-20 md:w-20`}
            >
              <CustomLink href={item?.url}>
                <CustomImage
                  className={`h-full w-full`}
                  width={50}
                  height={50}
                  src="/logo.webp"
                  alt="large logo"
                />
              </CustomLink>
            </NavbarItem>
          ) : (
            <NavbarItem
              key={`nav-main-${item?.url}-${index}`}
              className="hidden md:flex"
              isActive={pathname === item?.url}
            >
              <CustomLink href={item?.url} className={`text-sm font-bold uppercase text-slate-400`}>
                {item?.name}
              </CustomLink>
            </NavbarItem>
          );
        })}
      </NavbarContent> */}
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
          <Search className={`w-4 cursor-pointer text-slate-400 sm:w-6`} />
        </CustomLink>
        <CustomLink href={Routes.myAccount}>
          <User className={`w-4 cursor-pointer text-slate-400 sm:w-6`} />
        </CustomLink>
        {!null ? (
          <ShoppingCart className={`w-4 text-slate-400 sm:w-6`} />
        ) : (
          <Badge
            color="primary"
            content={!cart ? 0 : cart?.totalQuantity || 0}
            isInvisible={!cart}
            shape="circle"
          >
            <ShoppingCart className={`w-4 text-slate-400 sm:w-6`} />
          </Badge>
        )}
        <CustomImage width={80} height={32} src="/usa-about-us.webp" className="hidden sm:block" />
      </NavbarContent>
    </Navbar>
  );
}
