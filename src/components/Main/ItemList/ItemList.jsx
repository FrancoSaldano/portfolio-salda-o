import Item from "../Item/Item";
const ItemList = ({ servicesList }) => {
  console.log(servicesList);
  return (
    <div className="flex flex-wrap columns-2">
      {servicesList.map((servicio) => {
        return (
          <Item
            key={servicio.id}
            name={servicio.name}
            price={servicio.price}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
