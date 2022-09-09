import ItemDetailContainer from "./ItemList/ItemDetailContainer";
import ItemListContainer from "./ItemList/ItemListContainer";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div className="row-span-2 col-span-2">
      <p className="font-title-hammer text-4xl -m-5 text-right text-stone-600">
        SHOP
      </p>
      <p className="font-title-hammer text-4xl -m-5 mt-5 text-right text-stone-700">
        {categoryId}
      </p>
      <ItemDetailContainer
        categoryId={categoryId}
        />
        <ItemListContainer/>
    </div>
  );
};
export default Shop;
