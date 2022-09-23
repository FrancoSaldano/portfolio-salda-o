import { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

//este item renderiza la lista de categorias
const ItemListContainer = ({ title }) => {
  const [category, setCategory] = useState([]);

useEffect(() => {
  const getData = async () => {
    //referencia
    const query = collection(db, "categorías");
    //solicito info con la referencia
    const response = await getDocs(query);
    const categorys = response.docs.map((doc) => {
      const newService = {
        ...doc.data(),
        id: doc.id,
      };
      return newService;
    });
    setCategory(categorys)
  };
  getData()
}, []);

  return (
    <div className="grow w-full">
      <p className="font-title-hammer text-4xl -mx-5 m-5 text-right text-stone-600">
        {title}
      </p>
      <ItemList categoryList={category} />
    </div>
  );
};
export default ItemListContainer;
