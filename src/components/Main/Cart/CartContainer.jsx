import MinusIcon from "../Icons/MinusIcon"
import Loader from "../Icons/Loader"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../utils/firebase"
import Headers from '../Headers'

const CartContainer = ({ gridPosition }) => {
  const { productCartList, removeService, clearCartList, getTotalPrice } =
    useContext(CartContext)

  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)

  const sendOrder = (event) => {
    event.preventDefault()
    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
      date: getDate(),
    }
    setLoading(true)
    setTimeout(() => {
      const queryRef = collection(db, "orders")
      addDoc(queryRef, order).then((response) => {
        setOrderId(response.id)
        setLoading(false)
      })
    }, 3500)
  }

  const getDate = () => {
    return new Date()
  }

  return (
    <div className={`flex flex-col gap-10 h-full ${gridPosition}`}>
      <Headers title={'CART'} />
      {/* si se esta cargando muestra Loader */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* si hay una orden muestra el carrito con la orden */}
          {orderId ? (
            <>
              {productCartList.map((service) => (
                <div key={service.id} className="flex">
                  <div className="flex mx-6 my-2 p-3 ">
                    <p className="font-title-hammer text-3xl text-amber-200">
                      {service.name}
                    </p>
                    <p className="mx-6 my-auto text-xl font-title-hammer text-stone-100 font-black">
                      CANTIDAD. {service.quantity}
                    </p>
                    <p className="mx-6 my-auto text-xl font-title-hammer text-stone-100 font-black">
                      SUBTOTAL. ${service.totalServicePrice}
                    </p>
                  </div>
                </div>
              ))}
              <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-amber-300">
                ${getTotalPrice()}
              </p>
              <p className="font-detail-roboto text-3xl -mx-5 mb-5 text-center text-stone-500">
                Gracias por confiar en nosotros <br /> Este es el id de tu
                orden: {orderId}
              </p>
              <button
                onClick={() => {
                  clearCartList()
                  setOrderId("")
                }}
                className="text-xl font-text-montserrat text-center text-amber-200 hover:bg-stone-600"
              >
                Es todo muchas gracias
              </button>
            </>
          ) : (
            <>
              {/* si hay productos en el carrito, muestralos y despliega las funcionalidades del carrito */}
              {productCartList.length > 0 ? (
                <>
                  {productCartList.map((service) => (
                    <div key={service.id} className="flex justify-between">
                      <div className="flex mx-6 my-2 p-3 ">
                        <p className="font-title-hammer text-3xl text-amber-200">
                          {service.name}
                        </p>
                        <p className="mx-6 my-auto text-xl font-title-hammer text-stone-100 font-black">
                          CANTIDAD. {service.quantity}
                        </p>
                        <p className="mx-6 my-auto text-xl font-title-hammer text-stone-100 font-black">
                          SUBTOTAL. ${service.totalServicePrice}
                        </p>
                      </div>
                      <button
                        onClick={() => removeService(service.id)}
                        className="px-3 py-2 m-4 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
                      >
                        <MinusIcon />
                      </button>
                    </div>
                  ))}
                  <form onSubmit={sendOrder}>
                    <div className="relative z-0 mb-6 w-full group text-left">
                      <label className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {"Nombre:"}
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
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required={true}
                        placeholder="012-345-6789"
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
                        placeholder="ejemplo@gmial.com"
                      ></input>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => clearCartList()}
                        className="flex px-auto p-3 w-1/2 bg-stone-800 hover:bg-stone-900"
                      >
                        <p className="p-2 my-auto font-text-montserrat text-stone-100">
                          Limpiar Carrito
                        </p>
                      </button>
                      <button
                        type="submit"
                        className="flex justify-between px-auto p-3 w-1/2 bg-stone-700 hover:bg-stone-900"
                      >
                        <p className="p-2 my-auto font-text-montserrat text-stone-100">
                          Terminar compra
                        </p>
                        <p className="font-title-hammer text-3xl my-auto font-black text-right text-amber-400">
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
        </>
      )}
    </div>
  )
}

export default CartContainer
