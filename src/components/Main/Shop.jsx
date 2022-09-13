import ItemDetailContainer from "./ItemList/ItemDetailContainer";
import ItemListContainer from "./ItemList/ItemListContainer";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div className="flex flex-wrap row-span-4 col-span-2 row-start-2 col-start-2 -mt-20">
      <div className="grow w-full">
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-600">
          SHOP
        </p>
        <p className="font-title-hammer text-4xl -m-5 m t-5 text-right text-stone-700">
          {categoryId}
        </p>
      </div>
      <ItemDetailContainer categoryId={categoryId} />
      <ItemListContainer title={"CATEGORIAS"}/>
    </div>
  );
};
export default Shop;
