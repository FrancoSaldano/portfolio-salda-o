import ItemListContainer from "../Main/ItemList/ItemListContainer"

const Main = () => {
  return (
    <div className="row-span-2 col-span-2">
      <p className="font-title-hammer text-4xl -m-5 text-right text-stone-600">HOME</p>
      <p className="m-5 font-detail-roboto text-start text-amber-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt quisquam eius velit libero reiciendis soluta. Provident quos ipsa cumque.</p>
      <ItemListContainer title={"CATEGORIAS"}/>
    </div>
  );
};
export default Main;
