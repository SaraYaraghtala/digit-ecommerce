import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Menu from "./Components/Menu"
import Carousel from "./Components/Carousel";
import { Baner1 } from "./Components/Baners";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      < Menu />
      <Carousel />
      <div className="px-[5%]">
        < Baner1 />
        </div>
   
    </>
  );
}

export default App;
