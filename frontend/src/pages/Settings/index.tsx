import { Link } from "react-router-dom";

export const SettingsPage = () => {
  return (
    <div className="cc--page-settings container mx-auto px-6">
      <h1 className="font-bold text-2xl mb-4">Settings</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
}