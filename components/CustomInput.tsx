import { Input } from '@nextui-org/react';

interface ICustomInput {
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined' | undefined;
  radius?: 'sm' | 'md' | 'lg' | 'none' | 'full' | undefined;
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  isRequired?: boolean;
  endContent?: object;
}

export default function CustomInput({
  variant = 'bordered',
  radius = 'sm',
  className,
  ...rest
}: ICustomInput) {
  return <Input {...rest} className={`${className}`} variant={variant} radius={radius} />;
}
