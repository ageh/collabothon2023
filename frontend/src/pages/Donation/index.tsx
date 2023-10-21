import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import unicef from "../../assets/unicef.png";
import brac from "../../assets/brac.png";
import worldVision from "../../assets/world-vision.png";
import oxfamInternational from "../../assets/oxfam-international.png";
import selfHelpAfrica from "../../assets/self-help-africa.png";

export const DonationPage = () => {
  const charities = [
    {
      logo: unicef,
      name: "UNICEF",
    },
    {
      logo: brac,
      name: "BRAC",
    },
    {
      logo: worldVision,
      name: "World Vision",
    },
    {
      logo: oxfamInternational,
      name: "Oxfam International",
    },
    {
      logo: selfHelpAfrica,
      name: "Self Help Africa",
    },
  ];

  return (
    <div className="cc--page-donation container mx-auto px-6 text-center">
      <h1 className="font-bold text-2xl">Donation</h1>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-3">
        {charities.map((c, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={c.name}
                className="w-full object-cover h-[140px]"
                src={c.logo}
              />
            </CardBody>
            <CardFooter className="text-small">
              <b>{c.name}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
