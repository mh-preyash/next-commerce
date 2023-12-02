import { Button } from '@nextui-org/react';

interface ICustomButton {
  children?: any;
  color?: 'primary' | 'default' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  size?: 'md' | 'sm' | 'lg' | undefined;
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined' | undefined;
  radius?: 'md' | 'sm' | 'lg' | 'none' | 'full' | undefined;
  className?: string;
  rest?: object;
  fullWidth?: boolean;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function CustomButton(props: ICustomButton) {
  const {
    children,
    color = 'primary',
    size = 'md',
    radius = 'none',
    className = '',
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      className={`${className} font-Montserrat rounded-md px-9 py-4 text-base`}
      color={color}
      size={size}
      radius={radius}
    >
      {children}
    </Button>
  );
}
