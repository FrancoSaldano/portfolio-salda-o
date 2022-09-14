import ItemCount from "./ItemCount";
import { useState } from "react";
const ShowItem = ({ name, description, price }) => {
  const [countToCart, setCountToCart] = useState(0);
  const [cart, setCart] = useState(false);
  const onAdd = (count) => {
    setCountToCart(count);
    setCart(true);
  };

  return (
    <div className=" row-span-4 col-span-2 row-start-2 col-start-2 my-auto text-left bg-stone-900">
      <p className="mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-400">
        {name}
      </p>
      <p className="mx-6 my-2 p-3 font-text-montserrat text-md text-stone-400">
        {description}
      </p>
      <p className="mx-6 my-3 p-3 font-detail-roboto text-3xl text-right text-amber-400">
        {price}
      </p>

      {countToCart !== 0 && cart ? (
        console.log(countToCart, "añade una cantidad al carrito")
      ) : (
        <ItemCount onAdd={onAdd} stock={5} initial={0}></ItemCount>
      )}
    </div>
  );
};

export default ShowItem;
