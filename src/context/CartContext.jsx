import React from "react";
import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  
  const [productCartList, setProductCarList] = useState([]);
  const [users, setUsers] = useState({});
  const [lastId, setLastId] = useState("fH6yR0C90Hu7Ahwy8DcS") 

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
      //si existe buscalo
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
      //si no existe agregar al carrito
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

  const sendUser = (event) => {
    event.preventDefault();
    setUsers({
      name: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      phone: event.target[3].value,
      company: event.target[4].value,
    });

  };
  
  useEffect(() => {
    const query = collection(db, "user");
    Object.entries(users).length!==0 ? addDoc(query, users).then((response) => setLastId(response.id)) : console.log("no se puede mandar un user vacio a la db")
  }, [users]);

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addService,
        removeService,
        clearCartList,
        findService,
        getTotalPrice,
        sendUser,
        lastId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
