import { useState } from "react";

const ItemCount = ({stock,initial}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center">
      <button onClick={()=>setCount((count) => count>initial ? count-=1:count) } className="m-5 p-4 bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
        -
      </button>
      <button className="m-5 p-4 font-detail-roboto bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
        {count}
      </button>
      <button onClick={()=>setCount((count) => count<stock ? count+=1:count) } className="m-5 p-4 bg-stone-600 text-stone-100 rounded hover:bg-stone-700">
        +
      </button>
    </div>
  );
};
export default ItemCount;
