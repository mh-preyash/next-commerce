import Link from 'next/link';

export default function CustomLink(props) {
  const { href, isExternal, children, target = '_blank', ...rest } = props;
  return (
    <>
      {isExternal ? (
        <a href={href} {...rest} target={target} rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link className="text-primary" href={href || '#'} {...rest}>
          {children}
        </Link>
      )}
    </>
  );
}
