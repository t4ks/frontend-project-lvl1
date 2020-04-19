import runGame from '../core/core.js';
import { getRandomNumber } from '../core/utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(10, 20);
  return { question: `${a} ${b}`, correctAnswer: gcd(a, b).toString() };
};

export default () => runGame(greatestCommonDivisor, description);
