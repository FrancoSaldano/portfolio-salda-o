import DescriptionMenu from "./DescriptionMenu";

const ItemDetail = ({ name, price, category }) => {

  return (
    <div className="px-auto mx-auto flex flex-col transition-all ease-in-out delay-250 hover:bg-stone-900 ">
      <div className="p-4 mx-auto flex flex-wrap transition-all ease-in-out delay-250 hover:tracking-wide hover: -m-0.5 ">
        <p className="p-4 font-text-montserrat text-xl  text-amber-100 ">
          {name}
        </p>
        <DescriptionMenu
          name={name}
          category={category}
        ></DescriptionMenu>
      </div>
      <p className="p-4 mx-auto my-1 grow font-title-hammer font-black text-md text-stone-100 ">
        ${price}
      </p>
    </div>
  );
};

export default ItemDetail;
