import readlineSync from 'readline-sync';
import { OPERATION_ADD, OPERATION_MUL, OPERATION_SUB } from './constants.js';

const getRandomNumber = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};


const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};


const getRandomOperation = () => {
  const ops = [OPERATION_MUL, OPERATION_ADD, OPERATION_SUB];
  return ops[getRandomNumber(0, 3)];
};


export { getRandomNumber, sayHello, getRandomOperation };
