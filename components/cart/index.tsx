import { getCart } from 'lib/bigcommerce';
import { parseCookies } from 'nookies';
import CartModal from './modal';

export default async function Cart() {
  const cookies = parseCookies();
  const cartId = cookies['cartId'];
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }
  return <CartModal cart={cart} />;
}
