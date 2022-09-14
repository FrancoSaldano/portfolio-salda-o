import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import ArrowDownIcon from "@heroicons/react/solid/ArrowNarrowRightIcon";

const DescriptionMenu = ({ name, category }) => {
  return (
    <div className="w-min mx-auto my-auto text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-stone-800 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <NavLink to={`/shop/${category}/${name}`}>Detalle</NavLink>
            <ArrowDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-amber-200 hover:text-amber-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      </Menu>
    </div>
  );
};

export default DescriptionMenu;
