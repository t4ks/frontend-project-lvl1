import runGame from '../core/core.js';
import { getRandomNumber } from '../core/utils.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i < 1) {
      return false;
    }
  }
  return number > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = getRandomNumber(1, 1000);
  const numIsPrime = isPrime(question);
  const correctAnswer = numIsPrime === true ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => runGame(prime, description);
