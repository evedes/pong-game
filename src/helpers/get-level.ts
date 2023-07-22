export const getLevel = (hits: number) => {
  return Math.floor(hits / 10) + 1;
};
