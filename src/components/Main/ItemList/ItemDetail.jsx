import ItemCount from "./ItemCount";

const ItemDetail = ({ name, description, price}) => {
  return (
    <div className="flex flex-wrap columns-2">
      <div className="p-1 transition-all ease-in-out delay-250 hover:text-2xl hover:tracking-wide hover: -m-4-0.5 hover:bg-stone-900">
      <p className="p-4 font-text-montserrat text-xl  text-amber-100 ">
        {name}
      </p>
      <p className="p-3 font-detail-roboto text-sm  text-amber-100 ">
        {description} {price} <ItemCount stock={5} initial={1}></ItemCount>
      </p>
      </div>
    </div>
  );
};

export default ItemDetail;
