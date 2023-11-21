import { ShoppingCart } from 'react-feather';
export default function OpenCart({ quantity }: { className?: string; quantity?: number }) {
  return (
    <div>
      <ShoppingCart className={`w-4 cursor-pointer text-slate-500 sm:w-6`} />
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
