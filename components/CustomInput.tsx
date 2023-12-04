import { Input } from '@nextui-org/react';
import { ReactNode } from 'react';

interface ICustomInput {
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined';
  radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  isRequired?: boolean;
  endContent?: ReactNode;
  placeholder?: string;
  value?: string | number;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
}

export default function CustomInput({
  variant = 'bordered',
  radius = 'sm',
  min,
  max,
  label,
  type,
  name,
  isRequired,
  endContent,
  placeholder,
  value,
  className,
  onValueChange // ...rest
} // {...rest}
: ICustomInput) {
  return (
    <Input
      label={label}
      type={type}
      name={name}
      isRequired={isRequired}
      endContent={endContent}
      placeholder={placeholder}
      value={value}
      className={`${className}`}
      min={min}
      max={max}
      variant={variant}
      radius={radius}
      onValueChange={onValueChange}
    />
  );
}
