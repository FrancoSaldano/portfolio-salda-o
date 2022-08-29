const ItemListContainer = ({ grettings,children }) => {
  return (
    <div className="max-h-1 row-span-1 col-span-2">
      <h1 className="text-amber-100">{grettings}</h1>
      {children}
    </div>
  );
};
export default ItemListContainer;
