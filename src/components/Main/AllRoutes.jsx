import { Routes, Route } from "react-router-dom"
import Main from './Main'
import Shop from './Shop'
import CartContainer from './Cart/CartContainer'
import Contact from "./Contact"

const gridPosition = 'row-span-3 col-span-3 row-start-2 col-start-2'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <Main gridPosition={gridPosition} />} />
        <Route path="/shop"
          element={
            <Shop gridPosition={gridPosition} />} />
        <Route path="/shop/:categoryId"
          element={
            <Shop gridPosition={gridPosition} />} />
        <Route path="/shop/:categoryId/:itemId"
          element={
            <Shop gridPosition={gridPosition} />} />
        <Route path="/cart"
          element={
            <CartContainer gridPosition={gridPosition} />} />
        <Route path="/contact"
          element={
            <Contact gridPosition={gridPosition} />} />
      </Routes>
    </>
  )
}

export default AllRoutes