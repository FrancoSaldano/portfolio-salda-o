import { useState, useEffect } from "react";
import data from "../Data/MockData";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
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
      <p className="font-title-hammer text-4xl -mx-5 m-5 text-right text-stone-600">
        {title}
      </p>
      <ItemList servicesList={services} />
    </div>
  );
};
export default ItemListContainer;
