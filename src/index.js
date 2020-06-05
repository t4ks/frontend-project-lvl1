import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const runGame = (makeGame, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  let round = 0;
  console.log(description);

  while (round < NUMBER_OF_ROUNDS) {
    const { question, correctAnswer } = makeGame();
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      round = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
