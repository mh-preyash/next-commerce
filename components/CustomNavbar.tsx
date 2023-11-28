import Cart from '@/components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/bigcommerce';
import { Suspense } from 'react';
import NavbarMenu from './NavbarMenu';

export default async function CustomNavbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <>
      <NavbarMenu menu={menu}>
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </NavbarMenu>
    </>
  );
}
