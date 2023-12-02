import Link from 'next/link';

interface ICustomLink {
  href?: string;
  isExternal?: boolean;
  children?: any;
  className?: string;
  target?: string;
  rest?: object;
}

export default function CustomLink(props: ICustomLink) {
  const { href, isExternal, children, className, target = '_blank', ...rest } = props;
  return (
    <>
      {isExternal ? (
        <a href={href} {...rest} target={target} rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link className={className} href={href || '#'} {...rest}>
          {children}
        </Link>
      )}
    </>
  );
}
