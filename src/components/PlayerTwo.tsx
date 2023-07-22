interface PlayerTwoProps {
  ballPosition: {
    left: number;
    top: number;
    xDirection: string;
    yDirection: string;
  };
}

export const PlayerTwo = ({ ballPosition }: PlayerTwoProps) => {
  return (
    <div
      style={{
        top:
          ballPosition.top - 64 <= 48
            ? 48
            : ballPosition.top >= window.innerHeight - 48 - 64
            ? window.innerHeight - 48 - 128
            : ballPosition.top - 128 / 2,
      }}
      className="fixed h-32 w-6 bg-red-800 rounded-l-xl"
    />
  );
};
