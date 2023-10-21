import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import logoSrc from "../../assets/handshake.svg";

export const Header = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <img src={logoSrc} className="block w-12 h-12 mr-2" />
          <p className="font-bold text-inherit">CashCrowd</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="John Doe"
              size="sm"
              src="https://i1.sndcdn.com/avatars-000321234849-ytct1h-t500x500.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">john@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link to="/settings">Settings</Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
