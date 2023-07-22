import { Ball } from "./components/Ball";
import { PlayerOne } from "./components/PlayerOne";
import { PlayerTwo } from "./components/PlayerTwo";
import { useBall } from "./hooks/useBall";
import { usePlayerOneControl } from "./hooks/usePlayerOneControl";
import { SpaceInvader } from "./icons/SpaceInvader";

interface GameProps {
  lives: number;
  subtractLife: () => void;
  score: number;
  hits: number;
  level: number;
  handleHits: () => void;
}

export const Game = ({
  lives,
  subtractLife,
  score,
  hits,
  level,
  handleHits,
}: GameProps) => {
  const { playerOneYPos } = usePlayerOneControl();
  const { ballPosition } = useBall({
    subtractLife,
    playerOneYPos,
    handleHits,
    level,
  });

  return (
    <div className="h-full flex">
      <Ball ballPosition={ballPosition} />
      <div className="h-full flex-1 border-r-2 border-dashed">
        <div className="flex flex-col gap-4 fixed top-16 left-4 text-xl font-bold">
          <div>Human</div>
          <div>Lives:</div>
          <div className="flex items-center">
            {Array.from(new Array(lives), (_, index) => (
              <SpaceInvader key={index} />
            ))}
          </div>
          <div>Score: {score} </div>
          <div>Hits: {hits} </div>
          <div>Level: {level} </div>
        </div>
        <PlayerOne playerOneYPos={playerOneYPos} />
      </div>
      <div className="h-full flex-1 flex justify-end">
        <div className="fixed top-16 right-4 text-xl font-bold">Computer</div>
        <PlayerTwo ballPosition={ballPosition} />
      </div>
    </div>
  );
};
