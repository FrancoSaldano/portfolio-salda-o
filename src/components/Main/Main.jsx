import ItemListContainer from "../Main/ItemList/ItemListContainer";

const Main = () => {
  return (
    <div className="row-span-4 col-span-2 row-start-2 col-start-2 flex flex-col -mt-20">
      <div>
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-600">
          HOME
        </p>
        <p className="m-5 font-detail-roboto text-start text-amber-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          nesciunt quisquam eius velit libero reiciendis soluta. Provident quos
          ipsa cumque. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa veritatis, debitis, nobis fugit voluptates at dolor quaerat consequatur magni doloremque rerum reiciendis sed! Libero laborum quas repellat autem odio excepturi amet ratione itaque, nemo sapiente sint aspernatur rerum eos cupiditate ipsum! Id facilis ullam aperiam magni veniam eaque eos dolorem ipsum, repellendus assumenda unde quidem labore nemo consequuntur corrupti non deleniti? Autem possimus cumque non, suscipit assumenda similique harum architecto neque a nesciunt. Libero cupiditate earum, sequi quibusdam magnam quas perspiciatis nobis ut quidem, dolores adipisci. Harum suscipit, libero aut officia magnam rem ab quidem maiores mollitia, delectus repellat.
        </p>
      </div>
      <ItemListContainer title={"CATEGORIAS"} />
    </div>
  );
};
export default Main;
