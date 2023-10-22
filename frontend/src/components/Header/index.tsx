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
import robert from "../../assets/robert.jpg";

export const Header = () => {
  return (
    <Navbar className="bg-transparent">
      <NavbarContent>
        <NavbarBrand as={Link} to="/">
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
              className="ring-secondary transition-transform"
              color="primary"
              name="Robert Doe"
              size="sm"
              src={robert}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">john@example.com</p>
            </DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem key="earnings" as={Link} to="/earnings">
              Earnings
            </DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem key="settings" as={Link} to="/settings">
              Settings
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
