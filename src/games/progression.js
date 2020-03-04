import readlineSync from 'readline-sync';
import { getRandomNumber, sayHello, generateProgression } from '../utils.js';
import { PROGRESSION_LEN, GAME_ROUNDS } from '../constants.js';

const progression = () => {
  const name = sayHello();

  let round = 0;

  while (round < GAME_ROUNDS) {
    const step = getRandomNumber(2, 6);
    const arr = generateProgression(step, PROGRESSION_LEN);
    const elementInProgression = getRandomNumber(0, PROGRESSION_LEN);
    const res = arr[elementInProgression];
    arr[elementInProgression] = '..';
    console.log('What number is missing in the progression?');
    console.log('Question: ', arr.join(' '));
    const answer = readlineSync.question('Your Answer: ');

    if (answer === res.toString()) {
      round += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${res}".Let's try again, ${name}!`);
      round = 0;
    }
  }
};

export default progression;
