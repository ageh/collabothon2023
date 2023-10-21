"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const host = "localhost";
const port = 8585;
app.use(express_1.default.static("public"));
app.get("/charities", (req, res) => {
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
app.get("/totalEarnings", (req, res) => {
    res.send("42");
});
app.get("/transactions", (req, res) => {
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
app.get("/request", (req, res) => {
    const request = { amount: 24, commission: 2 };
    res.send(request);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
