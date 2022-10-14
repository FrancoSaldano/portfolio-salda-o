import ItemListContainer from "../Main/ItemList/ItemListContainer";

const Main = () => {
  return (
    <div className="row-span-4 col-span-2 row-start-2 col-start-2 flex flex-col -mt-20">
      <div>
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
          HOME
        </p>
        <p className="m-5 font-detail-roboto text-start text-amber-100">
          Bienvenidos a mi Proyecto Final para el curso de React.js con CODERHOUSE.
        </p>
        <p className="m-5 font-detail-roboto text-start text-stone-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis modi ut laborum qui earum optio corporis nobis amet. Voluptatum iusto, at obcaecati adipisci quas asperiores dolore exercitationem, in iste quasi eveniet ducimus ab et blanditiis magnam delectus odio. Tempore quae eaque commodi magnam quidem ipsum aliquam repellat vitae dolorum!
        </p>
      </div>
      <ItemListContainer title={"CATEGORIAS"} />
    </div>
  );
};
export default Main;
