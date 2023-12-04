'use client';
import React from 'react';
import { Select, SelectItem, Selection } from '@nextui-org/react';

interface ICustomSelect {
  data?: Array<{
    value: string;
    label: string;
  }>;
  startContent?: string;
  className?: string;
  label?: string;
  defaultSelectedKeys?: 'all' | React.Key[];
  onSelectionChange: (keys: Selection) => void;
  selectedKeys: string[];
}

export default function CustomSelect({ selectedKeys, data, startContent, onSelectionChange }: ICustomSelect) {
  return (
    <Select selectedKeys={selectedKeys} onSelectionChange={onSelectionChange}>
      {(data || []).map((i) => (
        <SelectItem key={i?.value} value={i?.value} startContent={startContent}>
          {i?.label}
        </SelectItem>
      ))}
    </Select>
  );
}
