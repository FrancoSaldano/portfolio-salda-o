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

  const sendOrder2 = (event) => {
    event.preventDefault();
    // console.log("Orden enviada", event);
    // console.log("nombre", event.target[0].value);
    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
      date: getDate(),
    };
    console.log("order", order);

    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then((response) => {
      console.log("response", response);
      setOrderId(response.id);
    });
  };

  const getDate = () => {
    return new Date();
  };

  return (
    <div className="flex flex-col h-full justify-between row-span-4 col-span-2 row-start-2 col-start-2 my-auto -mt-20 text-left">
      <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
        CART
      </p>
      {/* //si esta la orden desplega la info */}
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
            Gracias por confiar en nosotros <br /> Este es el id de tu orden:{" "}
            {orderId}
          </p>
          <button
            onClick={() => {
              clearCartList();
              setOrderId("");
            }}
            className="text-xl font-text-montserrat text-center text-amber-200 hover:bg-stone-600"
          >
            Es todo muchas gracias
          </button>
        </>
      ) : (
        //si no, chequea si hay algo en el carrito
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
              <form onSubmit={sendOrder2}>
                <div className="relative z-0 mb-6 w-full group text-left">
                  <label 
                className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Nombre:
                  </label>
                  <input
                    className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    type="text"
                    required={true}
                  ></input>
                </div>
                <div className="relative z-0 mb-6 w-full group text-left">
                  <div />
                  <label className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Telefono:
                  </label>
                  <input
                    className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    type="text"
                    required={true}
                  ></input>
                </div>
                <div className="relative z-0 mb-6 w-full group text-left">
                  <div />
                  <label className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Correo:
                  </label>
                  <input
                    className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    type="email"
                    required={true}
                  ></input>
                </div>
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
                    type="submit"
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
              </form>
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
