import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const host = "localhost";
const port = 8585;
var currentRequest = {};

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/charities", (req: Request, res: Response) => {
  const charities = [
    {
      logo: `http://${host}:${port}/images/unicef.png`,
      name: "UNICEF",
    },
    {
      logo: `http://${host}:${port}/images/brac.png`,
      name: "BRAC",
    },
    {
      logo: `http://${host}:${port}/images/world-vision.png`,
      name: "World Vision",
    },
    {
      logo: `https//${host}:${port}/images/oxfam-international.png`,
      name: "Oxfam International",
    },
    {
      logo: `http://${host}:${port}/images/self-help-africa.png`,
      name: "Self Help Africa",
    },
  ];
  res.send(charities);
});

app.get("/totalEarnings", (req: Request, res: Response) => {
  res.send("42");
});

app.get("/transactions", (req: Request, res: Response) => {
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
  res.send(transactions);
});

app.post("/request", (req: Request, res: Response) => {
  console.log("POST REQUEST", req);
  currentRequest = req.body;
  res.send(200);
});

app.get("/request", (req: Request, res: Response) => {
  res.send(currentRequest);
});

app.put("/request", (req: Request, res: Response) => {
  currentRequest = req.body;
  res.send(200);
});

app.delete("/request", (req: Request, res: Response) => {
  currentRequest = {};
  res.send(200);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
