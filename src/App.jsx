import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Menu from "./Components/Menu"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      < Menu />
    </>
  );
}

export default App;
