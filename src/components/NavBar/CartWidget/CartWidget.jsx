import ShoppingCartIcon from "@heroicons/react/solid/ShoppingCartIcon";

const CartWidget = () => {
  return (
    <>
      <span class="flex absolute h-3 w-3">
        <span class="animate-ping absolute left-9 bottom-1 inline-flex h-3 w-3 rounded-full bg-amber-200 opacity-75"></span>
        <span class="absolute left-9 bottom-1 inline-flex rounded-full h-3 w-3 bg-amber-100"></span>
      </span>
      <ShoppingCartIcon className="w-6 h-6 text-stone-100 mx-auto" />
    </>
  );
};

export default CartWidget;
