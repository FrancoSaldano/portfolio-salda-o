import ItemListContainer from "../Main/ItemList/ItemListContainer"
import ItemCount from "../Main/ItemList/ItemCount"
import ItemDetailContainer from "../Main/ItemList/ItemDetailContainer";

const Main = () => {
  return (
    <div className="row-span-3 col-span-2">
      <ItemListContainer grettings={"Hola :D"}>
        <ItemCount stock={5} initial={1} />
      </ItemListContainer>
      <ItemDetailContainer className="flex flex-wrap columns-2"/>
    </div>
  );
};
export default Main;
