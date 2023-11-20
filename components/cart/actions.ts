'use server';

import { addToCart, removeFromCart, updateCart } from 'lib/bigcommerce';
import { TAGS } from 'lib/constants';
import { revalidateTag } from 'next/cache';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

export async function addItem(
  prevState: any,
  {
    selectedProductId,
    selectedVariantId
  }: {
    selectedProductId: string | undefined;
    selectedVariantId: string | undefined;
  }
) {
  const cookies = parseCookies();
  const cartId = cookies['cartId'];

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    const { id } = await addToCart(cartId ?? '', [
      { merchandiseId: selectedVariantId, quantity: 1, productId: selectedProductId }
    ]);
    revalidateTag(TAGS.cart);
    setCookie(null, 'cartId', id, {
      maxAge: 30 * 24 * 60 * 60, // Max age in seconds (30 days in this example)
      path: '/' // Cookie path
    });
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, lineId: string) {
  const cookies = parseCookies();

  const cartId = cookies['cartId'];

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    const response = await removeFromCart(cartId, [lineId]);
    revalidateTag(TAGS.cart);

    if (!response && cartId) {
      destroyCookie(null, 'cartId', {
        path: '/' // Cookie path
      });
    }
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string;
    productSlug: string;
    variantId: string;
    quantity: number;
  }
) {
  const cookies = parseCookies();

  const cartId = cookies['cartId'];

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { lineId, productSlug, variantId, quantity } = payload;

  try {
    if (quantity === 0) {
      await removeFromCart(cartId, [lineId]);
      revalidateTag(TAGS.cart);
      return;
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
        productSlug
      }
    ]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error updating item quantity';
  }
}
