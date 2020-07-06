import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const runGame = (makeGame, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  let roundCounter = 0;
  console.log(description);

  while (roundCounter < NUMBER_OF_ROUNDS) {
    const { question, correctAnswer } = makeGame();
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      roundCounter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
