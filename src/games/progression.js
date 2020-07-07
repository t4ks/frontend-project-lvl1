import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const generateProgression = (step, length, firstElement) => Array(length)
  .fill(firstElement)
  .map((currentValue, index) => currentValue + (step * index));

const PROGRESSION_LEN = 10;
const description = 'What number is missing in the progression?';

const makeGame = () => {
  const step = getRandomNumber(2, 6);
  const firstElementInProgression = getRandomNumber(0, 100);
  const progression = generateProgression(step, PROGRESSION_LEN, firstElementInProgression);
  const randomIndexInProgression = getRandomNumber(0, PROGRESSION_LEN - 1);
  const correctAnswer = progression[randomIndexInProgression];
  progression[randomIndexInProgression] = '..';
  return { question: progression.join(' '), correctAnswer: correctAnswer.toString() };
};

export default () => runGame(makeGame, description);
