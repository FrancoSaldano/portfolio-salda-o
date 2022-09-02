import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import ItemCount from "./components/Main/ItemCount/ItemCount";

/* funcional components*/
function App() {

  return (
    <div className="App grid grid-rows-4 grid-cols-3 bg-stone-800">
      <Main />
      <NavBar />
      <ItemListContainer grettings={"Hola :D"}>
        <ItemCount stock={5} initial={1}/>
      </ItemListContainer>
      <Footer/>
    </div>
  );
}

export default App;
