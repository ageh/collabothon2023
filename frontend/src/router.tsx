import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "./AppRoot";
import { ErrorPage } from "./pages/Error";
import { HomePage } from "./pages/Home";
import { SettingsPage } from "./pages/Settings";
import { EarningsPage } from "./pages/Earnings";

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
        path: "/earnings",
        element: <EarningsPage />,
      },
    ],
  },
]);

export default router;
