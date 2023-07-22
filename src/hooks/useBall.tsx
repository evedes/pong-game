import { useEffect, useState } from "react";
import {
  BALL_WIDTH,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
} from "../helpers/constants";

interface UseBallProps {
  subtractLife: () => void;
  playerOneYPos: number;
  handleHits: () => void;
  level: number;
}

const initialState = {
  left: window.innerHeight / 2, // we want ball to start in the middle of the screen
  top: window.innerHeight / 6, // we want ball to start at 1/6th of the screen
  xDirection: "right", // we want ball to go right towards computer paddle
  yDirection: "down", // we want ball to go down towards computer paddle
};

export const useBall = ({
  subtractLife,
  playerOneYPos,
  handleHits,
  level,
}: UseBallProps) => {
  const [ballPosition, setBallPosition] = useState(initialState);

  const reinitializeGame = () => setBallPosition(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ballPosition.left >= window.innerWidth - BALL_WIDTH) {
        setBallPosition((prevState) => ({ ...prevState, xDirection: "left" }));
      }
      if (
        ballPosition.left < PADDLE_WIDTH &&
        ballPosition.top >= playerOneYPos &&
        ballPosition.top <= playerOneYPos + PADDLE_HEIGHT
      ) {
        handleHits();
        setBallPosition((prevState) => ({ ...prevState, xDirection: "right" }));
      }
      if (ballPosition.left <= 0) {
        subtractLife();
        return reinitializeGame();
      }
      if (ballPosition.top >= window.innerHeight - FOOTER_HEIGHT - BALL_WIDTH) {
        setBallPosition((prevState) => ({ ...prevState, yDirection: "up" }));
      }
      if (ballPosition.top <= HEADER_HEIGHT) {
        setBallPosition((prevState) => ({ ...prevState, yDirection: "down" }));
      }

      setBallPosition((prevState) => ({
        ...prevState,
        left:
          prevState.xDirection === "right"
            ? prevState.left + level
            : prevState.left - level,
        top:
          prevState.yDirection === "down"
            ? prevState.top + level
            : prevState.top - level,
      }));
    }, 1);

    return () => clearInterval(interval);
  }, [
    ballPosition.left,
    ballPosition.top,
    subtractLife,
    playerOneYPos,
    handleHits,
    level,
  ]);

  return { ballPosition };
};
