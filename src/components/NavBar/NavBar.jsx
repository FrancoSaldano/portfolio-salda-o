import HomeWidget from "@heroicons/react/solid/HomeIcon"
import ContactWidget from "@heroicons/react/solid/ChatIcon"
import ShopWidget from "@heroicons/react/solid/ShoppingBagIcon"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"

const styles = {
  liClass:
    "mx-3 text-sm transition-all ease-in-out delay-150",
  widgetClass: "w-6 h-6 text-stone-100 mx-auto hover:text-stone-300",
}

const NavBar = () => {

  return (
    <nav className="fixed w-full row-span-1 col-span-2 p-3 ml-auto font-title-hammer bg-inherit backdrop-blur-lg z-50">
      <ul className="flex justify-end items-center">
        <li className={styles.liClass}>
          <Link
            to={"/"}
            className="text-sm md:text-base text-amber-400"
          >
            HOME
          </Link>
        </li>
        <li className={styles.liClass}>
          <Link to={"/contact"} className="text-sm md:text-base text-amber-400">
            CONTACT
          </Link>
        </li>
        <li className={styles.liClass}>
          <Link to={"/shop"} className="text-sm md:text-base text-amber-400">
            SHOP
          </Link>
        </li>
        <li className={styles.liClass}>
          <Link to={"/cart"} className="text-sm md:text-base text-amber-400 ">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default NavBar
