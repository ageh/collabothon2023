// import { Link } from "react-router-dom";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";

export const SettingsPage = () => {
  return (
    <div className="cc--page-settings container mx-auto px-6 pt-4">
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Account Settings">
          some generic settings. Set currency, password etc.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Filters and Preferences"
        >
          <Switch defaultSelected>
          Allow Requests for Cash
          </Switch>
          <div className="pt-4" >
            Accept requests only from: 
          </div>
          <div>
            <Switch className="pt-4" defaultSelected>
              Women
            </Switch>
          </div>
          <div>
            <Switch className="pt-4" defaultSelected>
              My Contacts
            </Switch>
          </div>
          <div>
          <RadioGroup className="pt-4" label="Users with ratings">
            <Radio value="1star" className="pt-2">1 star and higher</Radio>
            <Radio value="2star" className="pt-2">2 star and higher</Radio>
            <Radio value="3star" className="pt-2">3 star and higher</Radio>
            <Radio value="4star" className="pt-2">4 star and higher</Radio>
            <Radio value="5star" className="pt-2">5 star</Radio>
          </RadioGroup>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}