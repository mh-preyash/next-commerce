import Image from "next/image";

export default function CustomImage(props) {
  return (
    <Image
      {...props}
      alt="image"
      placeholder="blur"
      src={props?.src || "/common-placeholder.jpg"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      blurDataURL={
        props?.blurDataURL || props?.src || "/common-placeholder.jpg"
      }
    />
  );
}
