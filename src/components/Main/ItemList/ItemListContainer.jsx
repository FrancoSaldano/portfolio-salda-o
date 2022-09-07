import { useState, useEffect } from "react";
import data from "../Data/MockData";
import ItemList from "./ItemList"

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
    <div>
      <h1 className="text-amber-100">{grettings}</h1>
      <ItemList servicesList={services} />
      {children}
    </div>
  );
};
export default ItemListContainer;
