import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const ShowItem = ({ service }) => {
  const { addService } = useContext(CartContext)
  const [countToCart, setCountToCart] = useState(0)
  const [cart, setCart] = useState(false)

  const onAdd = (count) => {
    setCountToCart(count)
    setCart(true)
    addService(service, count)
  }

  return (
    <div className=" row-span-4 col-span-2 row-start-2 col-start-2 my-auto text-left bg-stone-900">
      <p className="mx-6 my-2 p-3 font-title-hammer text-xl lg:text-3xl text-left text-amber-400">
        {service.name}
      </p>
      <p className="mx-6 my-2 p-3 font-text-montserrat text-sm lg:text-base text-stone-400">
        {service.description}
      </p>
      <p className="mx-6 my-3 p-3 font-title-hammer text-xl lg:text-3xl font-black text-right text-amber-400">
        ${service.price}
      </p>

      {countToCart !== 0 && cart ? (
        console.log(countToCart, "se añadió", countToCart)
      ) : (
        <ItemCount onAdd={onAdd} stock={5} initial={1}></ItemCount>
      )}
    </div>
  )
}

export default ShowItem
