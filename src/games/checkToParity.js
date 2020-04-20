import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

// eslint-disable-next-line no-confusing-arrow
const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkToParity = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number);
  return { question: `${number}`, correctAnswer: answer };
};

export default () => runGame(checkToParity, description);
