import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const makeGame = () => {
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(10, 20);
  return { question: `${a} ${b}`, correctAnswer: gcd(a, b).toString() };
};

export default () => runGame(makeGame, description);
