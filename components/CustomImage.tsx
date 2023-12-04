import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

interface ICustomImage extends ImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  placeholder?: 'blur' | 'empty' | `data:image/${string}` | undefined;
  sizes?: string;
  loading?: 'eager' | 'lazy' | undefined;
  className?: string;
  radius?: string;
}
export default function CustomImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  placeholder,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...rest
}: ICustomImage) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      placeholder={placeholder}
      {...rest}
    />
  );
}
