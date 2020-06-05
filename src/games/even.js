import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';


export default () => runGame(() => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
}, description);
