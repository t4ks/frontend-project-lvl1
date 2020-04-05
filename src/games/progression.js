import { getRandomNumber, generateProgression } from '../core/utils.js';
import runGame from '../core/core.js';

const PROGRESSION_LEN = 10;

const progression = () => {
  const step = getRandomNumber(2, 6);
  const arr = generateProgression(step, PROGRESSION_LEN);
  const elementInProgression = getRandomNumber(0, PROGRESSION_LEN);
  const correctAnswer = arr[elementInProgression].toString();
  arr[elementInProgression] = '..';
  console.log('What number is missing in the progression?');
  return { question: arr.join(' '), correctAnswer };
};

export default () => runGame(progression);
