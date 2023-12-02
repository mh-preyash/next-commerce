import Image from 'next/image';

interface ICustomImage {
  alt?: string;
  placeholder?: string;
  src?: string;
  sizes?: string;
  blurDataURL?: string;
  width?: string | number;
  height?: string | number;
  loading?: 'eager' | 'lazy' | undefined;
  className?: string;
  radius?: string;
}
export default function CustomImage(props: ICustomImage) {
  return (
    <Image
      {...props}
      loading={props?.loading}
      alt="image"
      placeholder="blur"
      src={props?.src || '/common-placeholder.jpg'}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      blurDataURL={props?.blurDataURL || props?.src || '/common-placeholder.jpg'}
    />
  );
}
