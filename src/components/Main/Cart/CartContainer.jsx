import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const {productCartList,removeService,clearCartList} = useContext(CartContext);

  return (
    <div className=" row-span-4 col-span-2 row-start-2 col-start-2 my-auto text-left bg-stone-900">
      {productCartList.map((service) => (
        <div key={service.id} className="flex">
          <p className="mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-400" >
            {service.name} , {service.quantity}
          </p>
          <button onClick={()=>removeService(service.id) } className="px-5 py-2 m-3 font-detail-roboto text-stone-100 bg-stone-700 hover:bg-stone-800"> - </button>
        </div>
      ))}
      <button onClick={()=> clearCartList() } className=" flex grow w-full px-auto p-3 font-detail-roboto text-stone-100 bg-stone-800 hover:bg-stone-900">Limpiar Carrito</button>
    </div>
  );
};

export default CartContainer;
