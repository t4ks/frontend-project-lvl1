import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getRandomOperation = () => {
  const ops = ['addition', 'subtraction', 'multiplication'];
  return ops[getRandomNumber(0, ops.length - 1)];
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  const numOne = getRandomNumber(1, 100);
  const numTwo = getRandomNumber(1, 100);
  const operation = getRandomOperation();

  let res = 0;
  let operationSymbol;

  switch (operation) {
    case 'addition':
      res = numOne + numTwo;
      operationSymbol = '+';
      break;
    case 'subtraction':
      res = numOne - numTwo;
      operationSymbol = '-';
      break;
    case 'multiplication':
      res = numOne * numTwo;
      operationSymbol = '*';
      break;
    default:
      throw new Error('The operation is not supported');
  }

  return { question: `${numOne} ${operationSymbol} ${numTwo}`, correctAnswer: res };
};

export default () => runGame(calcGame, description);
