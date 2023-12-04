import Image from 'next/image';

interface ICustomImage {
  alt: string;
  placeholder?: 'blur' | 'empty' | `data:image/${string}` | undefined;
  src: string;
  sizes?: string;
  blurDataURL?: string | undefined;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  className?: string;
  radius?: string;
}
export default function CustomImage(props: ICustomImage) {
  const {
    loading,
    src,
    blurDataURL,
    alt,
    placeholder = 'blur',
    width,
    height,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  } = props;
  return (
    <Image
      // {...props}
      // sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      placeholder={placeholder}
      src={src || '/common-placeholder.jpg'}
      blurDataURL={blurDataURL || src || '/common-placeholder.jpg'}
    />
  );
}
