import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer";

/* funcional components*/
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App grid grid-rows-2 grid-cols-3 bg-stone-800">
      <Main/>
      <NavBar/>
      <ItemListContainer grettings={"Hola :D"}/>
    </div>
  );
}

export default App;
