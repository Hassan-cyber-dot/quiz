import inquirer from "inquirer";
const questions = [
    {
       type: 'list',
       name: 'question1',
       message: 'What is the capital of France?',
       choices: [
         { name: 'Paris', value: 10 },
         { name: 'Berlin', value: 0 },
         { name: 'Madrid', value: 0 },
         { name: 'Rome', value: 0 },
       ],
    },
    {
       type: 'list',
       name: 'question2',
       message: 'What is the capital of Germany?',
       choices: [
         { name: 'Paris', value: 0 },
         { name: 'Berlin', value: 10 },
         { name: 'Madrid', value: 0 },
         { name: 'Rome', value: 0 },
       ],
    },
   ];
   async function startQuiz() {
    console.log('Welcome to the quiz!');
    const answers = await inquirer.prompt(questions);
    console.log('Your answers:', answers);
   }
   startQuiz()
