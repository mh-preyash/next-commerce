import { Button } from "@nextui-org/react";

export default function CustomButton(props) {
  const {
    children,
    color = "primary",
    size = "md",
    radius = "none",
    className = "",
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      className={`${className} text-base py-4 px-9 rounded-md font-Montserrat`}
      color={color}
      size={size}
      radius={radius}
    >
      {children}
    </Button>
  );
}
