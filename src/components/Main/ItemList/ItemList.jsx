import Item from "./Item"
import { NavLink } from "react-router-dom"

const ItemList = ({ categoryList }) => {
  return (
    <div className="flex items-center justify-between md:flex-wrap">
      {categoryList.map((category) => {
        return (
          <NavLink key={category.id} to={`/shop/${category.name}`} className='w-fit'>
            <Item
              name={category.name}
            />
          </NavLink>
        )
      })}
    </div>
  )
}

export default ItemList
