import HomeWidget from "@heroicons/react/solid/HomeIcon";
import AboutWidget from "@heroicons/react/solid/UserIcon";
import ContactWidget from "@heroicons/react/solid/ChatIcon";
import ShopWidget from "@heroicons/react/solid/ShoppingBagIcon";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  const styles = 
    {
      liclass:
        "mx-3 text-sm transition-all ease-in-out delay-150 hover:tracking-widest",
      widgetclass: "w-6 h-6 text-stone-100 mx-auto",
    }
  ;
  return (
    <nav className="container fixed row-span-1 col-span-2 flex justify-evenly right-0 top-0 pt-3 pb-8 font-title-hammer bg-stone-800 z-50">
      <ul className="flex">
        <li className={styles.liclass}>
          <Link
            to={"/"}
            className="text-amber-400 hover:underline-offset-4 hover:decoration-amber-100"
          >
            <HomeWidget className={styles.widgetclass} />
            HOME
          </Link>
        </li>
        <li className={styles.liclass}>
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AboutWidget className={styles.widgetclass} />
            ABOUT
          </a>
        </li>
        <li className={styles.liclass}>
          <Link to={"/contact"} className="text-amber-400">
            <ContactWidget className={styles.widgetclass} />
            CONTACT
          </Link>
        </li>
        <li className={styles.liclass}>
          <Link to={"/shop"} className="text-amber-400">
            <ShopWidget className={styles.widgetclass} />
            SHOP
          </Link>
        </li>
        <li className={styles.liclass}>
          <Link to={"/cart"} className="text-amber-400 ">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
