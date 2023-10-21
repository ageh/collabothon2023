import { Link } from "react-router-dom";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import graph from "../../assets/graph.png";
import increase from "../../assets/increase.png";

export const EarningsPage = () => {
  // manually setting earning
  const totalEarning = 42;
  const earning = 12;
  const transactions = [
    {
      date: "12th August",
      amount: "12 €",
      commission: "1 €",
    },
    {
      date: "13th July",
      amount: "50 €",
      commission: "4,50 €",
    },
    {
      date: "1st March",
      amount: "25 €",
      commission: "2 €",
    },
  ];

  return (
    <div className="cc--page-earnings container mx-auto px-6 text-center">
      <div
        style={{
          height: "30vh",
          backgroundImage: `url(${graph})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full">
          <h1 className="font-bold text-2xl">Earnings</h1>
          <h2 className="font-bold text-xl">{totalEarning} €</h2>

          <div className="h-2/3 flex justify-center">
            <div className="self-end">
              <div className="font-bold text-xs text-green-800 mb-1">
                + {earning} % ({(totalEarning / 100) * earning} €)
              </div>
              <Button className="" radius="full" color="success">
                Deposit
              </Button>
              <Button
                className=" ml-2"
                radius="full"
                color="danger"
                as={Link}
                to="/donation"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-4" />

      <div>
        <h2 className="font-bold text-l">Transactions</h2>
        <table className="table-fixed w-full">
          {transactions.map((tx) => (
            <Card className="mt-1 p-2">
              <CardBody className="table w-full">
                <td className="w-3/5 text-left">{tx.date}</td>
                <td className="w-2/5">
                  <div className="inline-block">{tx.amount}</div>
                  <div className="inline-block ml-2 bg-green-100">
                    <div className="p-1 text-sm font-medium">
                      + {tx.commission}
                    </div>
                  </div>
                </td>
              </CardBody>
            </Card>
          ))}
        </table>
      </div>
    </div>
  );
};
