import DescriptionMenu from "./DescriptionMenu"

const ItemDetail = ({ name, price, category }) => {
  return (
    <div className="px-auto mx-auto flex flex-col hover:bg-stone-900 transition-all ease-in-out delay-250 hover:tracking-wide  ">
      <div className="p-4 mx-auto flex flex-col h-full ">
        <p className="p-4 font-text-montserrat text-xl  text-amber-100 ">
          {name}
        </p>
        <div className='flex justify-between items-center'>
          <p className="p-4 mx-auto my-1 grow font-title-hammer font-black text-md text-stone-100 ">
            ${price}
          </p>
          <DescriptionMenu name={name} category={category}></DescriptionMenu>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
