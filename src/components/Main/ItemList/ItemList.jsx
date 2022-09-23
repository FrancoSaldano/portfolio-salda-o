import Item from "./Item";
import { NavLink } from "react-router-dom";

const ItemList = ({ categoryList }) => {
  return (
    <div className="flex flex-wrap justify-between mx-5">
      {categoryList.map((category) => {
        return (
          <NavLink key={category.id} to={`/shop/${category.name}`}>
            <Item
              name={category.name}
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default ItemList;
