import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const generateProgression = (step, length) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      arr[i] = getRandomNumber(0, 100);
    } else {
      arr[i] = arr[i - 1] + step;
    }
  }

  return arr;
};

const PROGRESSION_LEN = 10;
const description = 'What number is missing in the progression?';

const progression = () => {
  const step = getRandomNumber(2, 6);
  const arr = generateProgression(step, PROGRESSION_LEN);
  const elementInProgression = getRandomNumber(0, PROGRESSION_LEN);
  const correctAnswer = arr[elementInProgression].toString();
  arr[elementInProgression] = '..';
  return { question: arr.join(' '), correctAnswer };
};

export default () => runGame(progression, description);
