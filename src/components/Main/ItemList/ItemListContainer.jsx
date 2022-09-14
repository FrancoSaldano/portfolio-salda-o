import { useState, useEffect } from "react";
import data from "../Data/MockData";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
  const [category, setCategory] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  useEffect(() => {
    getData.then((result) => {
      setCategory(result);
    });
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
