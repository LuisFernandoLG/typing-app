const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const getRandomLetterFromABC = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};
