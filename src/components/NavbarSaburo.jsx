import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { Link } from 'react-router-dom';

import logoSecundario from '../icons/logoSecundario.png';
import ShopMenu from '../components/ShopMenu';
import avatarImage from '../images/avatar.jpg';
import '../styles/NavbarSaburo.css';
import { ShoppingCartIcon as ShoppingCardIconOutline } from '@heroicons/react/24/outline';
import { ShoppingCartIcon as ShoppingCardIconSolid } from '@heroicons/react/24/solid';

const itemsMenuMan = [
  { key: "shirtsMan", label: "Shirts" },
  { key: "t-shirtsMan", label: "T-Shirts" },
  { key: "pantsMan", label: "Pants" },
  { key: "hoodiesMan", label: "Hoodies" },
  { key: "hantsCapsMan", label: "Hats | Caps" },
  { key: "accesoriesMan", label: "Accesories" },
];

const itemsMenuWomen = [
  { key: "shirtsWomen", label: "Shirts" },
  { key: "t-shirtsWomen", label: "T-Shirts" },
  { key: "pantsWomen", label: "Pants" },
  { key: "hoodiesWomen", label: "Hoodies" },
  { key: "hantsCapsWomen", label: "Hats | Caps" },
  { key: "accesoriesWomen", label: "Accesories" },
];

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function NavbarSaburo() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0});
  };

  return (
    <Navbar isBordered >
      <NavbarContent justify="start">
        <NavbarBrand >
          <Link to="/" onClick={handleLogoClick}>
            <img className="h-15 w-auto object-contain" src={logoSecundario} alt="logoSaburo" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6">
          <NavbarItem>
            <ShopMenu className="link-underline" buttonText={"Men"} menuItems={itemsMenuMan} />
            <ShopMenu className="link-underline" buttonText={"Women"} menuItems={itemsMenuWomen} />
          </NavbarItem>
          
          <NavbarItem>
            <Link className="link-underline text-cafeCacao" to="#">
              On Sale
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="link-underline text-cafeCacao" to="#">
              New Arrivals
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          isClearable
          classNames={{
            base: "max-w-full sm:max-w-[25rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-cafeCacao bg-cafeCacao-400/20",
          }}
          placeholder="Search for products..."
          size="md"
          startContent={<SearchIcon size={18} />}
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
              src={avatarImage}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" >
            <DropdownItem key="profile" className="h-14 gap-2  pointer-events-none">
              <p className="font-semibold text-cafeCacao">Signed in as</p>
              <p className="font-semibold text-cafeCacao">Juan Pablo Garcia</p>
            </DropdownItem>
            <DropdownItem color="secondary" className="text-cafeCacao" key="settings">My Settings</DropdownItem>
            <DropdownItem color="secondary" className="text-cafeCacao" key="team_settings">My Likes</DropdownItem>
            <DropdownItem color="secondary" className="text-cafeCacao" key="analytics">My Purchases</DropdownItem>
            <DropdownItem color="secondary" className="text-cafeCacao hover:text-cafeCacao" key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem className="text-danger" key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarItem className="group">
        <Link  to="/shopping-cart">
          <ShoppingCardIconOutline className="h-6 w-6 text-cafeCacao group-hover:hidden" />
          <ShoppingCardIconSolid className="h-6 w-6 text-cafeCacao hidden group-hover:block" />
        </Link>
      </NavbarItem>
    </Navbar>
  );
}