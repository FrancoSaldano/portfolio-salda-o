import img from "./logo.png";
import CartWidget  from "../NavBar/CartWidget/CartWidget";
import HomeWidget from "./HomeWidget/HomeWidget";
import UserWidget from "./UserWidget/UserIcon";
import ContactIcon from "./ContactWidget/ContactIcon";
const NavBar = () => {
  return (
    <nav className= "row-span-1 col-span-2 font-title-hammer">
      <ul className="flex content-start items-top pt-0">
        <li className="mx-auto">
          <a
            className="transition ease-in-out text-amber-400 hover:"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HomeWidget/>
            HOME
          </a>
        </li>
        <li className="mx-auto">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UserWidget/>
            ABOUT
          </a>
        </li>
        <li className="mx-auto">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon/>
            CONTACT
          </a>
        </li>
        <li className="mx-auto">
          <a
            className="text-amber-400"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CartWidget/>
            SHOP
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
// AMBER 400 , 500 , 800
// STONE 800
