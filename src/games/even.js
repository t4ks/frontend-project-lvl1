import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(makeGame, description);
