import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const description = 'What is the result of the expression?';

const calc = () => {
  const numOne = getRandomNumber(1, 10);
  const numTwo = getRandomNumber(1, 10);
  const operation = getRandomOperation();

  let res = 0;

  switch (operation) {
    case '+':
      res = numOne + numTwo;
      break;
    case '-':
      res = numOne - numTwo;
      break;
    case '*':
      res = numOne * numTwo;
      break;
    default:
      throw new Error('The operation is not supported');
  }

  return { question: `${numOne} ${operation} ${numTwo}`, correctAnswer: res.toString() };
};

export default () => runGame(calc, description);
