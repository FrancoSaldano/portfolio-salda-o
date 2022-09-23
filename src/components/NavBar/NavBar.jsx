import HomeWidget from "./HomeWidget/HomeWidget";
import UserWidget from "./UserWidget/UserIcon";
import ContactIcon from "./ContactWidget/ContactIcon";
import ShopWidget from "./ShopWidget/ShopWidget";
import CartWidget from "./CartWidget/CartWidget";
import CartContainer from "../Main/Cart/CartContainer";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container fixed row-span-1 col-span-2 flex justify-evenly right-0 top-0 pt-3 pb-8 font-title-hammer bg-stone-800 z-50">
      <ul className="flex">
        <li className="mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest">
          <Link
            to={"/"}
            className="text-amber-400 hover:underline-offset-4 hover:decoration-amber-100"
          >
            <HomeWidget />
            HOME
          </Link>
        </li>
        <li className="mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UserWidget />
            ABOUT
          </a>
        </li>
        <li className="mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon />
            CONTACT
          </a>
        </li>
        <li className="mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest">
          <Link
            to={"/shop"}
            className="text-amber-400"
          >
            <ShopWidget />
            SHOP
          </Link>
        </li>
        <li className="mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest">
          <Link
            to={"/cart"}
            className="text-amber-400 "
          >
            <CartWidget />
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;
// AMBER 400 , 500 , 800
// STONE 800
