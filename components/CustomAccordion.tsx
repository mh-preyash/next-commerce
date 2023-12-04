import { Accordion, AccordionItem } from '@nextui-org/react';
import { ReactNode } from 'react';

interface ICustomAccordionItem {
  title: string;
  details: ReactNode;
}
interface ICustomAccordion {
  accordionData: ICustomAccordionItem[];
  defaultExpandedKeys?: string[];
  selectionMode: 'none' | 'single' | 'multiple';
}

export default function CustomAccordion(props: ICustomAccordion) {
  return (
    <Accordion
      selectionMode={props?.selectionMode}
      defaultExpandedKeys={props?.defaultExpandedKeys}
    >
      {(props.accordionData || []).map((i, j) => (
        <AccordionItem className="py-2" key={j} title={<b>{i?.title}</b>}>
          {i?.details}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
