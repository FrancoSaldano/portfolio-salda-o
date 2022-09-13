import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "@heroicons/react/solid/ArrowSmDownIcon";

const DescriptionMenu = ({ description, price }) => {
  return (
    <div className="w-min mx-auto my-auto text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-stone-800 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Detalle
            <ArrowDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-amber-200 hover:text-amber-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-stone-700 bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="bg-stone-700 text-stone-100 group flex w-full items-center px-4 py-2 text-md">
                  {description}
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="bg-stone-700 text-stone-100 group flex w-full items-center px-4 py-2 text-md">
                  {price}
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DescriptionMenu;
