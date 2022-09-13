import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Aside from "./components/Main/Aside";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Shop from "./components/Main/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* funcional components*/
function App() {
  return (
    <div className="App grid grid-rows-6 grid-cols-3  gap-3 grow-0 relative">
      <BrowserRouter>
        <Aside />
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          //ItemListContainer esta aqui
          <Route path="/shop" element={<Shop />} />
          //category
          <Route path="/shop/:categoryId" element={<Shop />} />
          //category en el shop
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
