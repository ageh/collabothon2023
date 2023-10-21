import { Outlet } from "react-router-dom";
import { GlobalContextProvider } from "./GlobalContext";
import { Header } from "./components/Header";

export const AppRoot = () => {
  return (
    <GlobalContextProvider>
      <div className="cc--root max-w-screen-sm mx-auto">
        <Header />
        <Outlet />
      </div>
    </GlobalContextProvider>
  );
}