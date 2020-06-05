import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const generateProgression = (step, length, firstElement) => Array(length)
  .fill(firstElement)
  .map((currentValue, index) => currentValue + (step * index));


const PROGRESSION_LEN = 10;
const description = 'What number is missing in the progression?';

const progression = () => {
  const step = getRandomNumber(2, 6);
  const firstElementInProgression = getRandomNumber(0, 100);
  const randomProgression = generateProgression(step, PROGRESSION_LEN, firstElementInProgression);
  const randomIndexInProgression = getRandomNumber(0, PROGRESSION_LEN);
  let correctAnswer;
  if (randomIndexInProgression === randomProgression.length) {
    correctAnswer = randomProgression[randomIndexInProgression - 1];
    randomProgression[randomIndexInProgression - 1] = '..';
  } else {
    correctAnswer = randomProgression[randomIndexInProgression];
    randomProgression[randomIndexInProgression] = '..';
  }
  return { question: randomProgression.join(' '), correctAnswer: correctAnswer.toString() };
};

export default () => runGame(progression, description);
