import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Aside from "./components/Main/Aside";
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer";

/* funcional components*/
function App() {
  return (
    <div className="App grid grid-rows-4 grid-cols-3 bg-stone-800">
      <Aside />
      <NavBar />
      <Main />
      <Footer /> 
    </div>
  );
}

export default App;
