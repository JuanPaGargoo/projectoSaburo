import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ShopMenu({ buttonText , menuItems = [] }) {
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
        {menuItems.map((item) => (
          <DropdownItem key={item.key} color="secondary" className="text-cafeCacao">
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
