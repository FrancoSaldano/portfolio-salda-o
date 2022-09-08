import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [services, setServices] = useState([]);
  const getItem = () => {
    fetch("/MockDataJson.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setServices(data);
        }, 2000);
      });
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <ItemDetail name={services[0]?.name} price={services[0]?.price} description={services[0]?.description}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;
