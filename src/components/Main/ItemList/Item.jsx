const Item = ({ name }) => {
  return (
    <div className="basis-1/2 grow w-full gap-0">
      <p className="mx-6 my-2 p-3 font-text-montserrat text-md text-stone-400 transition-all ease-in-out delay-250 hover:text-xl hover:tracking-wide hover:mx-7 hover:p-1 hover:bg-stone-900">
        {name}
      </p>
    </div>
  );
};

export default Item;

