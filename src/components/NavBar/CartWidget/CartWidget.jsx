import ToCartIcon from "@heroicons/react/solid/ArrowNarrowDownIcon";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { productCartList } = useContext(CartContext);
  return (
    <>
      <div className=" my-auto p-1">
        <ToCartIcon className="w-6 h-6 text-stone-100 mx-auto" />
        {productCartList.length !== 0 ? (
          <p className="font-title-hammer">{productCartList.length}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartWidget;
