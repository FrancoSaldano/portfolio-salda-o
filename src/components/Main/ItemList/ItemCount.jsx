import { useState } from "react";
import PlusIcon from "../Icons/PlusIcon"
import MinusIcon from "../Icons/MinusIcon";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center">
      <button
        onClick={() =>
          setCount((count) => (count > initial ? (count -= 1) : count))
        }
        className="m-6 p-3 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
      >
        <MinusIcon />
      </button>
      <button className="my-5 mx-3 p-4 font-detail-roboto bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
        {count}
      </button>
      <button
        onClick={() =>
          setCount((count) => (count < stock ? (count += 1) : count))
        }
        className="m-6 p-3 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
      >
        <PlusIcon />
      </button>
    </div>
  );
};
export default ItemCount;
