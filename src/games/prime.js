import readlineSync from 'readline-sync';
import { GAME_ROUNDS } from '../constants.js';
import { sayHello, getRandomNumber, isPrime } from '../utils.js';

const prime = () => {
  const name = sayHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let round = 0;
  while (round < GAME_ROUNDS) {
    const num = getRandomNumber(1, 1000);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Answer: ');
    const numIsPrime = isPrime(num);
    const correctAnswer = numIsPrime === true ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${correctAnswer}".Let's try again, ${name}!`);
      round = 0;
    }
  }
};

export default prime;
