import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "./AppRoot";
import { ErrorPage } from "./pages/Error";
import { HomePage } from "./pages/Home";
import { SettingsPage } from "./pages/Settings";
import { QRPage } from "./pages/QR";
import { EarningsPage } from "./pages/Earnings";
import { DonationPage } from "./pages/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/qr-page",
        element: <QRPage />,
      },
      {
        path: "/earnings",
        element: <EarningsPage />,
      },
      {
        path: "/donation",
        element: <DonationPage />,
      },
    ],
  },
]);

export default router;
