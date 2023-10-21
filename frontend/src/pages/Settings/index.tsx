// import { Link } from "react-router-dom";
import {Accordion, AccordionItem} from "@nextui-org/react";

export const SettingsPage = () => {
  return (
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Account Settings">
          some generic settings. Set currency, password etc.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Filters and Preferences"
        >
          some more text
        </AccordionItem>
      </Accordion>
    );
}