import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  const style = {
    background: "#784834",
    padding:'100px',
    borderRadius:"10px"

  };

  return (
    <>
      <h2 className="text-2xl my-7">Video Player </h2>

      <div style={style} >
        <Video />
      </div>
    
    </>
  );
}

export default App;
