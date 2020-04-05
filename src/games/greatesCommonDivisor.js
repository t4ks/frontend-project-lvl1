import runGame from '../core/core.js';
import { getRandomNumber, gcd } from '../core/utils.js';


const greatestCommonDivisor = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(10, 20);
  return { question: `${a} ${b}`, correctAnswer: gcd(a, b).toString() };
};

export default () => runGame(greatestCommonDivisor);
