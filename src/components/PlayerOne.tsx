interface PlayerOneProps {
  playerOneYPos: number;
}

export const PlayerOne = ({ playerOneYPos }: PlayerOneProps) => {
  return (
    <div
      style={{ top: playerOneYPos }}
      className="h-32 w-6 bg-red-800 fixed rounded-r-xl"
    />
  );
};
