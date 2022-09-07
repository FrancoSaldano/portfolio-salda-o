const ItemDetail = ({ name, description }) => {
  return (
    <div className="basis-1/2 grow w-full gap-0">
      <div>
      <p className="p-4 font-text-montserrat text-xl  text-amber-100 transition-all ease-in-out delay-250 hover:text-2xl hover:tracking-wide hover:p-3 hover:m-0.5 hover:bg-stone-900">
        {name}
      </p>
      <p className="p-3 font-detail-roboto text-sm  text-amber-100 transition-all ease-in-out delay-250 hover:text-base hover:tracking-wide hover:p-3 hover:m-0.5 hover:bg-stone-900">
        {description}
      </p>
      </div>
    </div>
  );
};

export default ItemDetail;
