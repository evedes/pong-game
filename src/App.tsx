import { useState } from "react";
import { Game } from "./Game";
import { Start } from "./Start";

function App() {
  const [playing, setIsPlaying] = useState(false);

  if (playing) {
    return <Game />;
  } else {
    return <Start />;
  }
}

export default App;
