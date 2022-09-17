import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ShowItem from "./ShowItem";

const ItemDetailContainer = ({ categoryId, itemId }) => {
  const [services, setServices] = useState([]);
  const [type, setType] = useState(true);

  const getItem = () => {
    fetch("/MockDataJson.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (itemId) {
            const newService = data.find(({ name }) => name === itemId);
            setServices([newService]);
            setType(false);
          } else if (categoryId) {
            const newServices = data.filter(
              ({ category }) => category === categoryId
            );
            setServices(newServices);
            setType(true);
          } else {
            setServices(data);
            setType(true);
          }
        }, 2000);
      });
  };
  useEffect(() => {
    getItem();
  }, [categoryId, itemId]);

  if (type) {
    return (
      <>
        {services.map((servicio) => {
          return (
            <div className="inline-block basis-1/2 grow" key={servicio.id}>
              <ItemDetail
                name={servicio.name}
                price={servicio.price}
                category={servicio.category}
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <div className="grow w-full">
          <ShowItem
            service={services[0]}
            // name={services[0]?.name}
            // price={services[0]?.price}
            // description={services[0]?.description}
            // category={services[0]?.category}
          />
        </div>
      </>
    );
  }
};

export default ItemDetailContainer;
