import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";

export const HomePage = () => {
  const [ amount, setAmount ] = useState(30);

  return (
    <div className="cc--page-home container mx-auto px-6 text-center">
      <h1 className="font-bold text-2xl">I need...</h1>

      <h2 className="font-medium text-7xl mt-2">{amount} €</h2>

      <input
        type="range"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        min={0}
        max={50}
        step={5}
        className="w-full h-2 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
      />

      <Input
        className="mt-4"
        size="lg"
        type="number"
        label="Cash Amount"
        labelPlacement="outside"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />

      <Button
        className="mt-4"
        as={Link}
        to="/test"
        color="primary"
        size="lg"
        radius="full"
      >
        Test Page
      </Button>
    </div>
  );
}