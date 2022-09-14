import ItemCount from "./ItemCount";
const ShowItem = ({name, description, price}) => {
  return (
    <div className=" row-span-4 col-span-2 row-start-2 col-start-2 my-auto text-left bg-stone-900">
      <p className="mx-6 my-2 p-3 font-title-hammer text-3xl text-amber-400">
        {name}
      </p>
      <p className="mx-6 my-2 p-3 font-text-montserrat text-md text-stone-400">
        {description}
      </p>
      <p className="mx-6 my-3 p-3 font-detail-roboto text-3xl text-right text-amber-400">
        {price}
      </p>
      <ItemCount stock={5} initial={1}></ItemCount>
    </div>
  );
};

export default ShowItem;
