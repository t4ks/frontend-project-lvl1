import runGame from '../core/core.js';
import { getRandomNumber, isPrime } from '../core/utils.js';

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const question = getRandomNumber(1, 1000);
  const numIsPrime = isPrime(question);
  const correctAnswer = numIsPrime === true ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => runGame(prime);
