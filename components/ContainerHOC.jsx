const ContainerHOC = ({ children, className = "", ...rest }) => {
  return (
    <main className={`${className} max-w-[1536px] mx-auto`}>{children}</main>
  );
};

export default ContainerHOC;
