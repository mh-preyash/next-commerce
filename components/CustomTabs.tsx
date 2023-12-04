import { Tab, Tabs } from '@nextui-org/react';
import React, { Key, ReactNode } from 'react';

interface ICustomTabs {
  fullWidth?: boolean;
  size: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  data: {
    title: ReactNode | string;
    body: ReactNode;
    key: string
  }[];
}

export default function CustomTabs({ data, size, fullWidth, ariaLabel }: ICustomTabs) {
  const [selected, setSelected] = React.useState(data[0]?.key);
  const handleChange = (value: Key) => setSelected(value.toString());

  return (
    <div className="flex w-full flex-col">
      <Tabs
        fullWidth={fullWidth}
        radius="none"
        size={size}
        color="primary"
        aria-label={ariaLabel}
        selectedKey={selected}
        onSelectionChange={handleChange}
      >
        {(data || []).map((i) => (
          <Tab key={i?.key} title={i?.title}>
            {i?.body}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
