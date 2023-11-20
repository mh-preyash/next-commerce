const Typography = ({ variant, children, className = "", ...rest }) => {
  const getComponent = () => {
    switch (variant) {
      case "h1":
        return (
          <h1
            className={`${className} font-bold xl:text-[40px] lg:text-[25px] md:text-[20px] text-2xl
            xl:leading-[70px] lg:leading-[55px] md:leading-[40px] sm:leading-[25px]
            font-Barlow`}
            {...rest}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`${className} font-bold leading-tight md:text-[30px] text-[20px]`}
            {...rest}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={`${className} md:text-[28px] sm:text-[26px] text-xl`}
            {...rest}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 className={`${className} text-2xl`} {...rest}>
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5 className={`${className} text-xl font-medium`} {...rest}>
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6 className={`${className} text-lg`} {...rest}>
            {children}
          </h6>
        );
      case "span":
        return (
          <span className={`${className} text-sm`} {...rest}>
            {children}
          </span>
        );
      case "small":
        return (
          <p className={`${className} text-xs`} {...rest}>
            {children}
          </p>
        );
      default:
        return (
          <p className={`${className} text-lg font-normal`} {...rest}>
            {children}
          </p>
        );
    }
  };
  return getComponent();
};

export default Typography;
