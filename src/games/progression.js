import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const generateProgression = (step, length, firstElement) => Array(length)
  .fill(firstElement)
  .map((curValue, index) => curValue + (step * index));


const PROGRESSION_LEN = 10;
const description = 'What number is missing in the progression?';

const progression = () => {
  const step = getRandomNumber(2, 6);
  const arr = generateProgression(step, PROGRESSION_LEN, getRandomNumber(0, 100));
  const randomIndexInProgression = getRandomNumber(0, PROGRESSION_LEN);
  let correctAnswer;
  if (randomIndexInProgression === arr.length) {
    correctAnswer = arr[randomIndexInProgression - 1];
    arr[randomIndexInProgression - 1] = '..';
  } else {
    correctAnswer = arr[randomIndexInProgression];
    arr[randomIndexInProgression] = '..';
  }
  return { question: arr.join(' '), correctAnswer: correctAnswer.toString() };
};

export default () => runGame(progression, description);
