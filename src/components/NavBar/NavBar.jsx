import React from "react";
import img from "../NavBar/linduras shop.png"
const NavBar = () => {
    return (
    <div>
        <nav className="bg-slate-300">
      <ul className="flex">
        <li className="mx-auto p-3">
            <img class="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
        </li>
        <li className="mx-auto p-3">
          <a href="#" target="_blank" rel="noopener noreferrer"></a>Home
        </li>
        <li className="mx-auto p-3">
          <a href="#" target="_blank" rel="noopener noreferrer"></a>About
        </li>
        <li className="mx-auto p-3">
          <a href="#" target="_blank" rel="noopener noreferrer"></a>Shop
        </li>
      </ul>
    </nav>
    <div>
        <h3></h3>
        <h3></h3>
        <h3></h3>
    </div>
    </div>
    
  );
};

export default NavBar;
