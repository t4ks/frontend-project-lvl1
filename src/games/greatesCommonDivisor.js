import readlineSync from 'readline-sync';
import { getRandomNumber, sayHello, gcd } from '../utils.js';
import { GAME_ROUNDS } from '../constants.js';


const greatestCommonDivisor = () => {
  const name = sayHello();
  console.log('Find the greatest common divisor of given numbers.');

  let round = 0;
  while (round < GAME_ROUNDS) {
    const a = getRandomNumber(1, 10);
    const b = getRandomNumber(10, 20);
    
    console.log(`Question: ${a} ${b}`);

    const res = gcd(a, b);
    const answer = readlineSync.question('Your answer: ');
    if (res.toString() === answer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${res}". Let's try again, ${name}!`);
      round = 0;
    }
  }
};

export default greatestCommonDivisor;
