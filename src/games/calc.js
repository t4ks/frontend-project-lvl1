import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getRandomOperators = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const description = 'What is the result of the expression?';

const makeGame = () => {
  const numOne = getRandomNumber(1, 10);
  const numTwo = getRandomNumber(1, 10);
  const operator = getRandomOperators();

  let res;

  switch (operator) {
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
      throw new Error('The operator is not supported');
  }

  return { question: `${numOne} ${operator} ${numTwo}`, correctAnswer: res.toString() };
};

export default () => runGame(makeGame, description);
