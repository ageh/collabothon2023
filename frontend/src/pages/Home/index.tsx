import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { createRequest } from "../../api";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import commissionIconSrc from "../../assets/icons/commission.svg";
import distanceIconSrc from "../../assets/icons/distance.svg";

export const HomePage = () => {
  const { setRequestRole, setActiveRequest } = useContext(GlobalContext);

  const [ amount, setAmount ] = useState(30);
  const [ commission, setCommission ] = useState(2);
  const [ distance, setDistance ] = useState(200);

  const [ submitLoading, setSubmitLoading ] = useState(false);

  const handleSubmit = () => {
    setSubmitLoading(true);
    // FIXME: Maybe delete all pending requests first
    const request = {
      id: Math.random().toString(16).slice(2),
      amount: amount,
      commission: commission,
      distance: distance
    };
    createRequest(request)
      .then(() => {
        setRequestRole('receiver');
        setActiveRequest(request);
        // navigate("/meetup");
      })
      .catch((err) => console.error("Couldn't submit request", err))
      .finally(() => setSubmitLoading(false));
  }

  return (
    <div className="cc--page-home container mx-auto px-6 pt-4 text-center">
      <h1 className="font-medium text-2xl cc--text-secondary">I need...</h1>

      <h2 className="font-medium text-7xl mt-2 cc--text-primary">{amount} €</h2>

      <div className="flex flex-col space-y-2 p-2">
        <input
          type="range"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          min={0}
          max={50}
          step={5}
          className="w-full h-1.5 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-primary"
        />
        <ul className="flex justify-between w-full px-2 text-sm text-gray-400">
          <li className="flex justify-center relative"><span className="absolute">0€</span></li>
          <li className="flex justify-center relative"><span className="absolute">50€</span></li>
        </ul>
      </div>

      <h2 className="font-medium text-xl mt-6 inline-flex items-center cc--text-primary">
        <img src={commissionIconSrc} className="inline-block w-5 h-5 mr-2" />
        Commission
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <span role="img" aria-label="info-circle" className="anticon anticon-info-circle inline align-middle ml-2 text-gray-400">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 w-52">
              <div className="text-small font-bold mb-1">Commission / Tip</div>
              <div className="text-tiny">The service tip you want to add on top of your amount as a reward for the giver.</div>
            </div>
          </PopoverContent>
        </Popover>
      </h2>

      <div className="flex flex-col space-y-2 p-2">
        <input
          type="range"
          value={commission}
          onChange={(e) => setCommission(parseInt(e.target.value))}
          min={0}
          max={10}
          step={2}
          className="w-full h-1.5 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-primary"
        />
        <ul className="flex justify-between w-full px-2 text-sm text-gray-400">
          <li className="flex justify-center relative"><span className="absolute">0€</span></li>
          <li className="flex justify-center relative"><span className="absolute">2€</span></li>
          <li className="flex justify-center relative"><span className="absolute">4€</span></li>
          <li className="flex justify-center relative"><span className="absolute">6€</span></li>
          <li className="flex justify-center relative"><span className="absolute">8€</span></li>
          <li className="flex justify-center relative"><span className="absolute">10€</span></li>
        </ul>
      </div>


      <h2 className="font-medium text-xl mt-8 inline-flex items-center cc--text-primary">
        <img src={distanceIconSrc} className="inline-block w-5 h-5 mr-2" />
        Distance
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <span role="img" aria-label="info-circle" className="anticon anticon-info-circle inline align-middle ml-2 text-gray-400">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1rem" height="1rem" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 w-52">
              <div className="text-small font-bold mb-1">Maximum Distance</div>
              <div className="text-tiny">The maximum distance between you and the person having the cash on hand.</div>
            </div>
          </PopoverContent>
        </Popover>
      </h2>

      <div className="flex flex-col space-y-2 p-2">
        <input
          type="range"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
          min={200}
          max={1000}
          step={100}
          className="w-full h-1.5 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-primary"
        />
        <ul className="flex justify-between w-full px-2 text-sm text-gray-400">
          <li className="flex justify-center relative"><span className="absolute">200m</span></li>
          <li className="flex justify-center relative"><span className="absolute">400m</span></li>
          <li className="flex justify-center relative"><span className="absolute">600m</span></li>
          <li className="flex justify-center relative"><span className="absolute">800m</span></li>
          <li className="flex justify-center relative"><span className="absolute">1km</span></li>
        </ul>
      </div>

      <Button
        className="mt-16 font-semibold w-full"
        color="primary"
        size="lg"
        radius="full"
        isLoading={submitLoading}
        onClick={handleSubmit}
      >
        Request Cash
      </Button>
    </div>
  );
}