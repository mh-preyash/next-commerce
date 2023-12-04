import clsx from 'clsx';
import Image from 'next/image';
import CustomImage from '../CustomImage';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      // className={clsx(
      //   'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-primary',
      //   {
      //     relative: label,
      //     'border-2 border-blue-600': active,
      //     'border-neutral-200 dark:border-neutral-800': !active
      //   }
      // )}
      className="flex h-full flex-col"
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <CustomImage
          className={clsx('relative h-full w-full rounded-lg object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          src={props?.src}
          alt={props?.alt}
          width={props?.width}
          height={props?.height}
          fill={props?.fill}
        />
      ) : null}
    </div>
  );
}
