
import { useContext } from "react";
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
import { GlobalContext } from "../../GlobalContext";
import logoSrc from "../../assets/handshake.svg";

export const Header = () => {  
  const { modalReceiverConfirmationSetOpen } = useContext(GlobalContext);

  return (
    <Navbar className="bg-transparent">
      <NavbarContent>
        <NavbarBrand as={Link} to="/">
          <img src={logoSrc} className="block w-12 h-12 mr-2" />
          <p className="font-bold text-inherit">CashCrowd Test</p>
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
            {/* @ts-ignore */}
            <DropdownItem key="settings" as={Link} to="/settings">
              Settings
            </DropdownItem>
            <DropdownItem key="req-flow-receiver" onClick={() => modalReceiverConfirmationSetOpen(true)}>
              Receiver Flow
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
