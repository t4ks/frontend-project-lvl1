import readlineSync from 'readline-sync';
import { OPERATION_ADD, OPERATION_MUL, OPERATION_SUB } from './constants.js';

const getRandomNumber = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};


const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};


const getRandomOperation = () => {
  const ops = [OPERATION_MUL, OPERATION_ADD, OPERATION_SUB];
  return ops[getRandomNumber(0, 3)];
};


const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export {
  getRandomNumber,
  sayHello,
  getRandomOperation,
  gcd,
};
