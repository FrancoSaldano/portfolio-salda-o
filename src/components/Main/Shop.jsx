import ItemDetailContainer from "./ItemList/ItemDetailContainer"
import ItemListContainer from "./ItemList/ItemListContainer"
import { useParams } from "react-router-dom"
import Headers from './Headers'

const Shop = ({ gridPosition }) => {
  const { categoryId, itemId } = useParams()

  return (
    <main className={`flex flex-wrap p-3 ${gridPosition}`}>
      <div className="grow w-full">
        <Headers title={'SHOP'} />
        {categoryId && (
          <p className="font-title-hammer text-2xl lg:text-4xl mb-3 text-right text-stone-600">
            {`${categoryId}`}
          </p>
        )}
        {itemId && (
          <p className="font-title-hammer text-2xl lg:text-4xl mb-3 text-right text-stone-700">
            {`${itemId}`}
          </p>
        )}
      </div>
      <ItemDetailContainer categoryId={categoryId} itemId={itemId} />
      <ItemListContainer>
        <Headers title='Categorías' />
      </ItemListContainer>
    </main>
  )
}
export default Shop
