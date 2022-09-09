import Item from "./Item";
import { NavLink } from "react-router-dom";

const ItemList = ({ servicesList }) => {
  return (
    <div className="flex flex-wrap justify-between mx-5">
      {servicesList.map((servicio) => {
        return (
          <NavLink key={servicio.id} to={`/shop/${servicio.name}`}>
            <Item
              name={servicio.name}
              price={servicio.price}
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default ItemList;
