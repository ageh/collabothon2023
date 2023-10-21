import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const AppRoot = () => {
  return (
    <div className="cc--root max-w-screen-sm mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}