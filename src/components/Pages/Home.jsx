import Main from "../Main/Main";

const Home = ({ children }) => {
  return (
    <div className="grid grid-rows-4 grid-cols-3 bg-stone-800">
        <Main/>
      {children.map((el) =>{return el} )}
    </div>
  );
};

export default Home;
