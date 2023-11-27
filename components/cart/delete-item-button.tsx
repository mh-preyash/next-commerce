'use client';

import clsx from 'clsx';
import { removeItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import type { VercelCartItem as CartItem } from 'lib/bigcommerce/types';
import {
  // @ts-ignore
  useFormState,
  useFormStatus
} from 'react-dom';
import { X } from 'react-feather';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Remove cart item"
      aria-disabled={pending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
        {
          'cursor-not-allowed px-0': pending
        }
      )}
    >
      {pending ? <LoadingDots className="bg-white" /> : <X />}
    </button>
  );
}

export function DeleteItemButton({ item }: { item: CartItem }) {
  const [message, formAction] = useFormState(removeItem, null);
  const itemId = item.id;
  const actionWithVariant = formAction.bind(null, itemId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
