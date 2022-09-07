import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [services, setServices] = useState([]);
  const getItem = () => {
    fetch('/MockDataJson.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setServices(data);
        }, 2000);
      });
  };
  useEffect(() => {
      getItem();
      console.log(services)
  }, []);

  return (
    <>
      {services.map((service) => {
        console.log(service);
        return (
          <div className="inline-block">
            <ItemDetail
              id={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
            />
          </div>
        );
      })}
    </>
  );
};

export default ItemDetailContainer;
