import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Aside from "./components/Main/Aside";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Shop from "./components/Main/Shop";
import CartContainer from "./components/Main/Cart/CartContainer";
import { CartProvider } from "./context/CartContext";
import Contact from "./components/Main/Contact";
/* funcional components*/
function App() {
  const [texto, setTexto] = useState("");

  return (
    <BrowserRouter>
      <div className="App grid grid-rows-6 grid-cols-3  gap-3 grow-0 relative">
        <Aside />
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            //ItemListContainer esta aqui
            <Route path="/shop" element={<Shop />} />
            //category
            <Route path="/shop/:categoryId" element={<Shop />} />
            //category en el shop
            <Route path="/shop/:categoryId/:itemId" element={<Shop />} />
            //item específico
            <Route path="/cart" element={<CartContainer />} />
            // carrito
            <Route path="/contact" element={<Contact />} />
            // página de contacto
          </Routes>
        </CartProvider>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
