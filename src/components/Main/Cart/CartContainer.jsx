import MinusIcon from "../Icons/MinusIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import {
  doc,
  collection,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";

//lista de servicios del carrito
const CartContainer = () => {
  const [buyer, setBuyer] = useState([]);
  const [orderId, setOrderId] = useState("");

  const {
    productCartList,
    removeService,
    clearCartList,
    getTotalPrice,
    lastId,
  } = useContext(CartContext);

  useEffect(() => {
    const getData = () => {
      //referencia
      const query = doc(db, "user", `${lastId}`);
      //solicito info con la referencia del último usuario registrado y lo asigno como comprador
      const response = getDoc(query);
      response.then((user) => setBuyer(user.data()));
    };
    getData();
  }, []);

  const sendOrder = () => {
    const order = {
      buyer: { buyer },
      services: productCartList,
      total: getTotalPrice(),
    };
    console.log(order);
    const query = collection(db, "orders");
    addDoc(query, order).then((response) => setOrderId(response.id));
  };

  return (
    <div className="flex flex-col h-full justify-between row-span-4 col-span-2 row-start-2 col-start-2 my-auto -mt-20 text-left">
      <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
        CART
      </p>
      {orderId ? (
        <>
          {productCartList.map((service) => (
            <div key={service.id} className="flex">
              <p className="flex mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-200">
                {service.name}
                <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                  cantidad: {service.quantity}
                </p>
                <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                  total: ${service.totalServicePrice}
                </p>
              </p>
            </div>
          ))}
          <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-amber-300">
            ${getTotalPrice()}
          </p>
          <p className="font-detail-roboto text-3xl -mx-5 mb-5 text-center text-stone-500">
            Gracias por confiar en nosotros este es el id de tu orden: {orderId}
          </p>
        </>
      ) : (
        <>
          {productCartList.length > 0 ? (
            <>
              {productCartList.map((service) => (
                <div key={service.id} className="flex">
                  <p className="flex mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-200">
                    {service.name}
                    <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                      cantidad: {service.quantity}
                    </p>
                    <p className="text-stone-400 mx-5 text-md font-detail-roboto">
                      total: ${service.totalServicePrice}
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
                    {"Limpiar Carrito"}
                  </p>
                </button>
                <button
                  onClick={() => sendOrder()}
                  className="flex justify-between px-auto p-3 w-1/2 bg-stone-700 hover:bg-stone-900"
                >
                  <p className="font-detail-roboto text-stone-100">
                    {"Terminar compra"}
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
        </>
      )}
    </div>
  );
};

export default CartContainer;
