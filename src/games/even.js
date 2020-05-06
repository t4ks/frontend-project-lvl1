import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const number = getRandomNumber(1, 100);
  const answer = (number % 2 === 0) ? 'yes' : 'no';
  return { question: `${number}`, correctAnswer: answer };
};

export default () => runGame(isEven, description);
