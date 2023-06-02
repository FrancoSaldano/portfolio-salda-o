import ItemListContainer from "../Main/ItemList/ItemListContainer"
import Headers from './Headers'

const Main = ({ gridPosition }) => {
  return (
    <main className={`flex flex-col w-full gap-10 p-3 ${gridPosition} `}>
      <div className='flex flex-col gap-5'>
        <Headers title={'HOME'} />
        <p className="mx-5 font-detail-roboto text-start text-sm md:text-base text-amber-100">
          Bienvenidos a mi Proyecto Final para el curso de React.js en Coderhouse.
        </p>
        <p className="mx-5 font-detail-roboto text-start text-sm md:text-base text-stone-100">
          En este proyecto puedes encontrar y es el objetivo, que los servicios de la persona sean prioridad
          con un manejo de categorías especificas y los items correspondientes que se pueden agregar a un carro. <br />
          Los items se muestran con su titulo y precio, su descripción en un apartado diferente
        </p>
      </div>
      <ItemListContainer>
        <Headers title='Categorías' />
      </ItemListContainer>
    </main>
  )
}
export default Main
