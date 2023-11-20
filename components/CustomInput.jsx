import {Input} from '@nextui-org/react';

export default function CustomInput({
  variant = 'bordered',
  radius = 'sm',
  className,
  ...rest
}) {
  return (
    <Input
      {...rest}
      className={`${className}`}
      variant={variant}
      radius={radius}
    />
  );
}
