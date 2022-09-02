const Item = ({ id, name, price }) => {
  return (
    <div className="basis-1/2 grow w-full gap-0">
      <p className="p-4 font-text-montserrat text-xl  text-amber-100 transition-all ease-in-out delay-250 hover:text-2xl hover:tracking-wide hover:p-3 hover:m-0.5 hover:bg-stone-900">
        {name}
      </p>
    </div>
  );
};

export default Item;

//la clase es super grande pero la necesitaba para que se agrege bien al quitar o poner más services :]
//no se donde colocar price sobre el componente pero entiendo como funciona.
