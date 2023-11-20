import React from 'react';
import {Tabs, Tab, Card, CardBody, CardHeader} from '@nextui-org/react';

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
