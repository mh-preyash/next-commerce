import { Accordion, AccordionItem } from '@nextui-org/react';

interface ICustomAccordion {
  accordionData?: Array<{
    title: string;
    details: string;
  }>;
}

export default function CustomAccordion(props: ICustomAccordion) {
  return (
    <Accordion {...props}>
      {(props.accordionData || []).map((i, j) => (
        <AccordionItem className="py-2" key={j} title={<b>{i?.title}</b>}>
          {i?.details}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
