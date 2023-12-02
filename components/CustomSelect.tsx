'use client';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface ICustomSelect {
  data?: Array<{
    value: string;
    label: string;
  }>;
  startContent?: string;
  rest?: object;
  className?: string;
  label?: string;
  defaultSelectedKeys: Array<string>;
}

export default function CustomSelect({ data, startContent, ...rest }: ICustomSelect) {
  return (
    <Select {...rest}>
      {(data || []).map((i) => (
        <SelectItem key={i?.value} value={i?.value} startContent={startContent}>
          {i?.label}
        </SelectItem>
      ))}
    </Select>
  );
}
