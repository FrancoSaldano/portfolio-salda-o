import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ categoryId }) => {
  const [services, setServices] = useState([]);

  const getItem = () => {
    fetch("/MockDataJson.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (categoryId) {
            const newServices = data.filter(
              ({ category }) => category === categoryId
            );
            setServices(newServices);
          } else {
            setServices(data);
          }
        }, 2000);
      });
  };
  useEffect(() => {
    getItem();
  }, [categoryId]);

  return (
    <>
      {services.map((servicio) => {
        return (
          <div className="inline-block basis-1/2 grow ">
            <ItemDetail
              name={servicio.name}
              price={servicio.price}
              description={servicio.description}
              category={servicio.category}
            />
          </div>
        );
      })}
    </>
  );
};

export default ItemDetailContainer;
