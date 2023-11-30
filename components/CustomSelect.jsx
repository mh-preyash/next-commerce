'use client'
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

export default function CustomSelect({ data, startContent, ...rest }) {
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
