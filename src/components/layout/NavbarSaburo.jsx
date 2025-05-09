import React, { useEffect, useState } from "react";
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
} from "@heroui/react"; // Ensure @heroui/react is installed and correctly configured
import { Link, useNavigate } from "react-router-dom";

import logoSecundario from "../../icons/logoSecundario.png"; // Ensure the file path is correct
import ShopMenu from "../shared/ShopMenu"; // Ensure ShopMenu is exported correctly
import noAvatarImage from "../../images/noAvatar.png"; // Ensure the file path is correct
import { useAuth } from "../../context/AuthContext"; // Ensure useAuth is exported correctly
import axios from "axios"; // Ensure axios is installed
import "../../styles/NavbarSaburo.css"; // Ensure the CSS file exists
import { ShoppingCartIcon as ShoppingCardIconOutline } from "@heroicons/react/24/outline";
import { ShoppingCartIcon as ShoppingCardIconSolid } from "@heroicons/react/24/solid";

const itemsMenuMan = [
  { key: "shirtsMan", label: "Shirts" },
  { key: "t-shirtsMan", label: "T-Shirts" },
  { key: "pantsMan", label: "Pants" },
  { key: "hoodiesMan", label: "Hoodies" },
  { key: "hantsCapsMan", label: "Hats | Caps" },
  { key: "accesoriesan", label: "Accessories" },
];

const itemsMenuWoman = [
  { key: "shirtsWoman", label: "Shirts" },
  { key: "t-shirtsWoman", label: "T-Shirts" },
  { key: "pantsWoman", label: "Pants" },
  { key: "hoodiesWoman", label: "Hoodies" },
  { key: "hantsCapsWoman", label: "Hats | Caps" },
  { key: "accesoriesWoman", label: "Accessories" },
];

export default function NavbarSaburo() {
  const { user, setUser, refreshNavbar } = useAuth(); // Obtén el estado refreshNavbar
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Recuperar datos del usuario al cargar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${user.id}`);
        const { name, profilePhoto } = response.data;

        // Actualiza el estado del usuario con los datos recuperados
        setUser((prevUser) => ({
          ...prevUser,
          name,
          avatar: profilePhoto || noAvatarImage, // Usa la imagen predeterminada si no hay avatar
        }));
      } catch (error) {
        console.error("Error al recuperar los datos del usuario:", error);
      }
    };

    if (user && user.id) {
      fetchUserData();
    }
  }, [user?.id, setUser, refreshNavbar]);
  refreshNavbar

  const handleLogout = () => {
    setUser(null);
    navigate("/"); // Cierra la sesión
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
            <img className="h-15 w-auto object-contain" src={logoSecundario} alt="logoSaburo" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6">
          <NavbarItem>
            <ShopMenu className="link-underline" buttonText="Man" menuItems={itemsMenuMan} gender="man" />
            <ShopMenu className="link-underline" buttonText="Woman" menuItems={itemsMenuWoman} gender="woman" />
          </NavbarItem>
          <NavbarItem>
            <Link className="link-underline text-cafeCacao" to="/filtered-products?title=On+Sale&discount=true">
              On Sale
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="link-underline text-cafeCacao" to="/filtered-products?title=New+Arrivals&recent=true">
              New Arrivals
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          isClearable
          value={searchQuery}
          onChange={handleSearchChange}
          classNames={{
            base: "max-w-full sm:max-w-[25rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-cafeCacao bg-cafeCacao-400/20",
          }}
          placeholder="Search for products..."
          size="md"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform scale-80"
              color="primary"
              size="sm"
              src={user && user.avatar ? user.avatar : noAvatarImage}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions">
            {!user ? (
              <>
                <DropdownItem
                  color="secondary"
                  className="text-cafeCacao"
                  key="login"
                  onAction={() => handleNavigation("/login")}
                >
                  Login
                </DropdownItem>
                <DropdownItem
                  color="secondary"
                  className="text-cafeCacao"
                  key="signup"
                  onAction={() => handleNavigation("/signup")}
                >
                  Sign Up
                </DropdownItem>
              </>
            ) : (
              <>
                <DropdownItem key="profile" className="h-14 gap-2 pointer-events-none">
                  <p className="font-semibold text-cafeCacao">Signed in as</p>
                  <p className="font-semibold text-cafeCacao">{user.name}</p>
                </DropdownItem>
                <DropdownItem
                  color="secondary"
                  className="text-cafeCacao"
                  key="edit-profile"
                  onAction={() => handleNavigation(`/edit-profile/${user.id}`)} // Navegar a Edit Profile
                >
                  Edit Profile
                </DropdownItem>
                <DropdownItem
                  color="secondary"
                  className="text-cafeCacao"
                  key="logout"
                  onAction={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarItem className="group">
        <Link to="/shopping-cart">
          <ShoppingCardIconOutline className="h-6 w-6 text-cafeCacao group-hover:hidden" />
          <ShoppingCardIconSolid className="h-6 w-6 text-cafeCacao hidden group-hover:block" />
        </Link>
      </NavbarItem>
    </Navbar>
  );
}