import ItemListContainer from "../Main/ItemList/ItemListContainer";

const Main = () => {
  return (
    <div className="row-span-4 col-span-2 row-start-2 col-start-2 flex  -mt-20">
      <div>
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-600">
          HOME
        </p>
        <p className="m-5 font-detail-roboto text-start text-amber-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          nesciunt quisquam eius velit libero reiciendis soluta. Provident quos
          ipsa cumque.
        </p>
      </div>
      <ItemListContainer title={"CATEGORIAS"} />
    </div>
  );
};
export default Main;
