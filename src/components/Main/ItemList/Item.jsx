const Item = ({ name }) => {
  return (
    <div className="basis-1/2 grow w-full gap-0">
      <p className=" p-3 font-text-montserrat text-sm md:text-base text-stone-400 transition-all ease-in-out delay-250  hover:bg-stone-900">
        {name}
      </p>
    </div>
  )
}

export default Item;

