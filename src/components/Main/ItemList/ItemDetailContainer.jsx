import { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import ShowItem from "./ShowItem";

const ItemDetailContainer = ({ categoryId, itemId }) => {
  const [services, setServices] = useState([]);
  const [type, setType] = useState(true);

  useEffect(() => {
    //logica para tomar la info de firestore
    const getData = async () => {
      //referencia
      const query = collection(db, "servicios");
      //solicito info con la referencia
      const response = await getDocs(query);
      //tomo los servicios con un data() a travez de los doc 
      const services = response.docs.map((doc) => {
        const newService = {
          ...doc.data(),
          id: doc.id,
        };
        return newService;
      });

      //logica para filtrar id y categorias
      if (itemId) {
        const newService = services.find(({ name }) => name === itemId);
        setServices([newService]);
        setType(false);
      } else if (categoryId) {
        const newServices = services.filter(
          ({ category }) => category === categoryId
        );
        setServices(newServices);
        setType(true);
      } else {
        setServices(services);
        setType(true);
      }
    };
    getData();
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
          <ShowItem service={services[0]} />
        </div>
      </>
    );
  }
};

export default ItemDetailContainer;
