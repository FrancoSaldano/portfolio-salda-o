import ToCartIcon from "@heroicons/react/solid/ShoppingCartIcon"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
  const { productCartList } = useContext(CartContext)
  return (
    <>
      <div>
        {productCartList.length !== 0 ? (
          <p className="font-title-hammer">CART: {productCartList.length}</p>
        ) : (
          <p className="text-amber-400 transition-all ease-in-out delay-150">CART</p>
        )}
      </div>
    </>
  )
}

export default CartWidget
