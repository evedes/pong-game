import { useState } from "react";
import { Game } from "./Game";
import { Start } from "./Start";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { getLevel } from "./helpers/get-level";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lives, setLives] = useState(5);
  const [hits, setHits] = useState(0);
  let debounceTimeout: number;

  const startGame = () => {
    setLives(5);
    setGameOver(false);
    setGameStarted(true);
    setHits(0);
  };

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
  };

  const subtractLife = () => {
    if (lives - 1 === 0) {
      endGame();
    } else {
      setLives((lives) => lives - 1);
    }
  };

  const handleHits = () => {
    // We need to debounce the handleHits, because state takes time to update
    // and in the meantime this function can be called more than once.
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      setHits((hits) => hits + 1);
    }, 100);
  };

  const level = getLevel(hits);
  const score = hits * getLevel(hits) * 1e2;

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {gameStarted ? (
          <Game
            lives={lives}
            subtractLife={subtractLife}
            score={score}
            hits={hits}
            level={level}
            handleHits={handleHits}
          />
        ) : (
          <Start startGame={startGame} gameOver={gameOver} score={score} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
