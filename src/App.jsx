import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-2xl my-10">Video Player </h2>
      <Video />
    </>
  );
}

export default App;
