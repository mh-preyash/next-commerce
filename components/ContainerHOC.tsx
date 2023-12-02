const ContainerHOC = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <main className={`${className} mx-auto max-w-[1536px]`}>{children}</main>;
};

export default ContainerHOC;
