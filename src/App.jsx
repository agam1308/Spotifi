import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { MusicPlayer } from "./components/musicplayer/MusicPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="top-container">
        <Sidebar />
        <Navbar></Navbar>
      </div>
      <div className="bottom-container">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
