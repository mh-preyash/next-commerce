import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';

export default function CustomTabs({data}) {
  const [selected, setSelected] = React.useState(data[0]?.title);
  return (
    <div className="flex w-full flex-col">
      <Tabs
        radius="none"
        color="primary"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        {(data || []).map((i) => (
          <Tab key={i?.title} title={i?.title}>
            {i?.body}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
