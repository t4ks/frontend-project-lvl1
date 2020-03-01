import readlineSync from 'readline-sync';
import { sayHello, getRandomNumber, getRandomOperation } from '../utils.js';
import {
  GAME_ROUNDS,
  OPERATION_ADD,
  OPERATION_SUB,
  OPERATION_MUL,
} from '../constants.js';

const calcGame = () => {
  const name = sayHello();
  console.log('What is the result of the expression?');

  let gameRound = 0;

  while (gameRound < GAME_ROUNDS) {
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
        console.log('Not correct operation');
    }

    console.log(`Question: ${numOne} ${operation} ${numTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === res.toString()) {
      console.log('Correct!');
      gameRound += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${res}".Let's try again, ${name}!`);
    }
  }
};

export default calcGame;
