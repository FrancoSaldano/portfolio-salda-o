import ToCartIcon from "@heroicons/react/solid/ShoppingCartIcon";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { productCartList } = useContext(CartContext);
  return (
    <>
      <div>
        <ToCartIcon className="w-6 h-6 text-stone-100 mx-auto" />
        {productCartList.length !== 0 ? (
          <p className="font-title-hammer">{productCartList.length}</p>
        ) : (
          <p className="text-amber-400 transition-all ease-in-out delay-150 hover:tracking-widest">CART</p>
        )}
      </div>
    </>
  );
};

export default CartWidget;
