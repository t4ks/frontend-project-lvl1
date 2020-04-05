import readlineSync from 'readline-sync';
import GAME_ROUNDS from './constants.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};


const runGame = (game) => {
  const name = sayHello();
  let round = 0;

  while (round < GAME_ROUNDS) {
    const gameObj = game();
    console.log('Question: ', gameObj.question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameObj.correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameObj.correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      round = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
