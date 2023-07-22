import { useEffect, useState } from "react";

export const usePlayerOneControl = () => {
  const [playerOneYPos, setPlayerOneYPos] = useState(300);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const footerHeight = 48;
      const paddleHeight = 128;
      if (
        event.clientY <= 48 ||
        event.clientY >= window.innerHeight - footerHeight - paddleHeight
      )
        return;

      setPlayerOneYPos(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [playerOneYPos]);

  return { playerOneYPos };
};
