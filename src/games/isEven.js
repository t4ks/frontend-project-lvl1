import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const number = getRandomNumber(1, 100);
  let answer = 'no';
  if (number % 2 === 0) {
    answer = 'yes';
  }
  return { question: `${number}`, correctAnswer: answer };
};

export default () => runGame(isEven, description);
