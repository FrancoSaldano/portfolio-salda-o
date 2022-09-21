import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import MinusIcon from "../Icons/MinusIcon";
import { Link } from "react-router-dom";

//lista de servicios del carrito
const CartContainer = () => {
  const { productCartList, removeService, clearCartList, getTotalPrice } =
    useContext(CartContext);
  console.log(productCartList);

  return (
    <div className="flex flex-col h-full justify-between row-span-4 col-span-2 row-start-2 col-start-2 my-auto -mt-20 text-left">
      <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
        CART
      </p>

      {productCartList.length > 0 ? (
        <>
          {productCartList.map((service) => (
            <div key={service.id} className="flex">
              <p className="flex mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-200">
                {service.name}{" "}
                <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                  cantidad: {service.quantity}
                </p>
                <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                  total: {service.totalServicePrice}
                </p>
              </p>
              <button
                onClick={() => removeService(service.id)}
                className="px-3 py-2 m-4 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
              >
                <MinusIcon />
              </button>
            </div>
          ))}
          <div className="flex">
            <button
              onClick={() => clearCartList()}
              className="flex px-auto p-3 w-1/2 bg-stone-800 hover:bg-stone-900"
            >
              <p className="font-detail-roboto text-stone-100">
                Limpiar Carrito
              </p>
            </button>
            <button className="flex justify-between px-auto p-3 w-1/2 bg-stone-700 hover:bg-stone-900">
              <p className="font-detail-roboto text-stone-100">
                Terminar compra{" "}
              </p>
              <p className="font-detail-roboto text-stone-100">
                ${getTotalPrice()}
              </p>
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl font-detail-roboto -mx-5 mb-5 text-center text-stone-500">
            El carrito esta vacío
          </p>
          <Link to={"/shop"}>
              <p className="text-xl font-text-montserrat text-center text-amber-200 hover:bg-stone-600">
                Tenemos servicios espectaculares para vos.
              </p>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
