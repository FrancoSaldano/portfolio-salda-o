import { useState } from "react"
import PlusIcon from "../Icons/PlusIcon"
import MinusIcon from "../Icons/MinusIcon"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex justify-around">
      <div className="flex no-wrap">
        <button
          onClick={() =>
            setCount((count) => (count > initial ? (count -= 1) : count))
          }
          className="my-10 p-1 px-2 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
        >
          <MinusIcon />
        </button>
        <p className="my-auto mx-5 p-2 lg:p-3 px-5 font-title-hammer font-black bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
          {count}
        </p>
        <button
          onClick={() =>
            setCount((count) => (count < stock ? (count += 1) : count))
          }
          className="my-10 p-1 px-2 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
        >
          <PlusIcon />
        </button>
      </div>
      <div className="text-amber-100  my-auto" onClick={() => onAdd(count)}>
        <button className="my-10 p-1 lg:p-3 bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
          <p className="my-auto mx-3 lg:mx-5 p-1 text-sm lg:text-base font-title-hammer font-black">
            Añadir al carrito
          </p>
        </button>
      </div>
    </div>
  )
}
export default ItemCount
