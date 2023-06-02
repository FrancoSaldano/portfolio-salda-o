import { useState, useEffect } from "react"
import { db } from "../../../utils/firebase"
import { collection, getDocs } from "firebase/firestore"
import ItemList from "./ItemList"
import Headers from '../Headers'

//este item renderiza la lista de categorías
const ItemListContainer = ({ children }) => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const getData = async () => {
      //referencia
      const query = collection(db, "categorías")
      //solicito info con la referencia
      const response = await getDocs(query)
      const categories = response.docs.map((doc) => {
        const newService = {
          ...doc.data(),
          id: doc.id,
        }
        return newService
      })
      setCategory(categories)
    }
    getData()
  }, [])

  return (
    <section className="flex flex-col justify-center items-end gap-5 ml-auto mt-5">
      {children}
      <ItemList categoryList={category} />
    </section>
  )
}
export default ItemListContainer
