import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Aside from "./components/Main/Aside"
import Footer from "./components/Footer/Footer"

import { CartProvider } from "./context/CartContext"
import AllRoutes from './components/Main/AllRoutes'

function App() {
  return (
    <BrowserRouter>
      <div className="App grid grid-rows-[4em,auto,1em] grid-cols-4 gap-3 grow-0 relative">
        <Aside />
        <CartProvider>
          <NavBar />
          <AllRoutes />
        </CartProvider>
        <Footer gridPosition={'row-span-1 col-span-4 col-start-1 row-start-5'} />
      </div>
    </BrowserRouter>
  )
}

export default App
