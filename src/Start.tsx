interface StartProps {
  startGame: () => void;
  gameOver: boolean;
  score: number;
}

export const Start = ({ startGame, gameOver, score }: StartProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        {gameOver && (
          <>
            <div className="text-6xl font-bold text-red-500">
              👾 GAME OVER 👾
            </div>
            <div className="text-4xl font-bold text-yellow-400">
              Your Score: {score}{" "}
            </div>
          </>
        )}
        <div className="text-6xl font-bold">PONG</div>
        <div className="text-lg font-bold">
          You have 5 lives to survive to PONG!
        </div>
        <div className="text-lg font-bold">Do your best highscore!</div>
        <div className="text-3xl">When you're ready, press Start</div>
        <button
          className="text-2xl bg-red-500 py-4 px-8 rounded-xl font-bold my-12"
          onClick={startGame}
        >
          {gameOver ? "Play Again" : "Start Game"}
        </button>
      </div>
    </div>
  );
};
