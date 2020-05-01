const getRandomNumber = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi;
};

// eslint-disable-next-line import/prefer-default-export
export { getRandomNumber };
