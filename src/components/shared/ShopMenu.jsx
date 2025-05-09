import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ShopMenu({ buttonText, menuItems = [], gender }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown onOpenChange={(open) => setIsOpen(open)}>
      <DropdownTrigger>
        <Button
          disableRipple
          className="bg-transparent p-0  text-cafeCacao"
          endContent={isOpen ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />}
        >
          {buttonText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        {menuItems.map((item) => {
          const genderParam = item.label.toLowerCase() === "accessories" ? "unisex" : gender;
          const categoriesParam = item.label.toLowerCase() === "hats | caps"
            ? "hat,cap"
            : item.label.toLowerCase();

          console.log(`Generated URL: /filtered-products?title=${buttonText}&gender=${genderParam}&categories=${categoriesParam}`);

          return (
            <DropdownItem key={item.key} color="secondary" className="text-cafeCacao">
              <Link
                to={`/filtered-products?title=${buttonText}&gender=${genderParam}&categories=${categoriesParam}`}
                className="block px-4 py-2 text-cafeCacao hover:bg-gray-100"
                onClick={() => window.scrollTo({ top: 0 })} // Scroll to top on click
              >
                {item.label}
              </Link>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}