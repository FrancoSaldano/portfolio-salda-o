import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Aside from "./components/Main/Aside";
import About from "./components/Main/About";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Shop from "./components/Main/Shop";
import CartContainer from "./components/Main/Cart/CartContainer";
import { CartProvider } from "./context/CartContext";
import Contact from "./components/Main/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App grid grid-rows-6 grid-cols-3  gap-3 grow-0 relative">
        <Aside />
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:categoryId" element={<Shop />} />
            <Route path="/shop/:categoryId/:itemId" element={<Shop />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
