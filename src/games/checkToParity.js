import readlineSync from 'readline-sync';
import { getRandomNumber, sayHello } from '../utils.js';
import GAME_ROUNDS from '../constants.js';


const checkToParity = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let end = false;
  let counter = 0;

  while (end === false) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Answer: ');

    if ((number % 2 === 0) && (answer === 'yes')) {
      console.log('Correct');
      counter += 1;
    } else if ((number % 2 !== 0) && (answer === 'no')) {
      console.log('Correct');
      counter += 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${name}!`);
      counter -= 1;
    }

    if (counter === GAME_ROUNDS) {
      end = true;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default checkToParity;
