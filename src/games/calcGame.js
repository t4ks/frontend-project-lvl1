import runGame from '../core/core.js';
import { getRandomNumber } from '../core/utils.js';

const OPERATION_ADD = '+';
const OPERATION_SUB = '-';
const OPERATION_MUL = '*';

const getRandomOperation = () => {
  const ops = [OPERATION_MUL, OPERATION_ADD, OPERATION_SUB];
  return ops[getRandomNumber(0, 3)];
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  console.log(description);
  const numOne = getRandomNumber(1, 100);
  const numTwo = getRandomNumber(1, 100);
  const operation = getRandomOperation();

  let res = 0;
  switch (operation) {
    case OPERATION_ADD:
      res = numOne + numTwo;
      break;
    case OPERATION_SUB:
      res = numOne - numTwo;
      break;
    case OPERATION_MUL:
      res = numOne * numTwo;
      break;
    default:
      throw new Error('The operation not supported');
  }

  return { question: `${numOne} ${operation} ${numTwo}`, correctAnswer: res };
};

export default () => runGame(calcGame);
