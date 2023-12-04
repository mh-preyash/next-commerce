import Link from 'next/link';
import { ReactNode } from 'react';

interface ICustomLink {
  href: string;
  isExternal?: boolean;
  children: ReactNode;
  className?: string;
  target?: string;
  rest?: object;
  onClick?: () => void;
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
