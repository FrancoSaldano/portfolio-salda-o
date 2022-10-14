import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCarList] = useState([]);

  const findService = (serviceId) => {
    const serviceExist = productCartList.some((item) => item.id == serviceId);
    return serviceExist;
  };

  const addService = (service, quantity) => {
    const newService = {
      ...service,
      quantity,
    };
    if (findService(newService.id)) {
      //si existe en el carrito, buscalo y modificalo.
      const position = productCartList.findIndex(
        (servicecart) => servicecart.id == newService.id
      );
      const newCartList = [...productCartList];
      newCartList[position].quantity =
        newCartList[position].quantity + newService.quantity;
      newCartList[position].totalServicePrice =
        newCartList[position].quantity * parseInt(newCartList[position].price);
      setProductCarList(newCartList);
    } else {
      //si no existe, agregalo al carrito.
      newService.totalServicePrice = newService.quantity * newService.price;
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

  const getTotalPrice = () => {
    const totalPrice = productCartList.reduce(
      (acum, service) => acum + service.totalServicePrice,
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addService,
        removeService,
        clearCartList,
        findService,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
