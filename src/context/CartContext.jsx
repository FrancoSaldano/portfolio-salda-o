import React from "react";
import { useEffect, useState } from "react";
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCarList] = useState([]);

  const findService = (serviceId) => {
    const serviceExist = productCartList.some((item) => item.id == serviceId )
    return serviceExist
  };

  const addService = (service, quantity) => {
    const newService = {
      ...service,
      quantity,
    };
    if(findService(newService.id)){
      //si existe buscalo
      const position  = productCartList.findIndex((servicecart) => servicecart.id == newService.id )
      console.log(position,"indice del igual en el carrito")
      const newCartList = [...productCartList]
      newCartList[position].quantity = newCartList[position].quantity + newService.quantity
      setProductCarList(newCartList)
    }else{
      //si no existe agregar al carrito
      const newCartList = [...productCartList];
      newCartList.push(newService);
      setProductCarList(newCartList);
    }

  };

  const removeService = (serviceId) => {
    const newCartList = productCartList.filter((item) => item.id !== serviceId);
    setProductCarList(newCartList);
  };

  const clearCartList = () => {
    setProductCarList([]);
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addService,
        removeService,
        clearCartList,
        findService,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
