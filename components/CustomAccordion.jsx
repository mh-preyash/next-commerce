import { Accordion, AccordionItem } from "@nextui-org/react";

export default function CustomAccordion(props) {
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
