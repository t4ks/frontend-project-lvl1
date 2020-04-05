import runGame from '../core/core.js';
import { getRandomNumber } from '../core/utils.js';

// eslint-disable-next-line no-confusing-arrow
const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';

const checkToParity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomNumber(1, 100);
  const answer = isEven(number);
  return { question: `${number}`, correctAnswer: answer };
};

export default () => runGame(checkToParity);
