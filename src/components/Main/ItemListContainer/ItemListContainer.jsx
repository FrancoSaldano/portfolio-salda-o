import { useState, useEffect } from "react";
import data from "./MockData";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ grettings, children }) => {
  const [services, setServices] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  useEffect(() => {
    getData.then((result) => {
      setServices(result);
    });
  }, []);

  return (
    <div className="row-span-2 col-span-2">
      <h1 className="text-amber-100">{grettings}</h1>
      <ItemList servicesList={services}></ItemList>
      {children}
    </div>
  );
};
export default ItemListContainer;
