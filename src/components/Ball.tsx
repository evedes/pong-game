interface BallProps {
  ballPosition: {
    left: number;
    top: number;
    xDirection: string;
    yDirection: string;
  };
}

export const Ball = ({ ballPosition }: BallProps) => {
  return (
    <div
      style={{ left: ballPosition.left, top: ballPosition.top }}
      className="fixed bg-red-400 h-6 w-6 rounded-full"
    />
  );
};
