const readLineSync = require('readline-sync');
const quiz = 
{
  name : "Fun Quiz with Simar!",
  totalNumberofQuestions : 5,
  questions : [
    {
      ques : "Which crop is sown on the largest area in India?",
      options : ["Rice","Wheat","Corn","None of the above"],
      answer :"1"
    },
    {
      ques : "Which animal is known as the ‘Ship of the Desert?",
      options : ["Lion","Horse","Frog","Camel"],
      answer :"4"
    },
    {
      ques : "In which direction does the sun rise?",
      options : ["East","West","North","South"],
      answer :"1"
    },
    {
      ques : "Which month of the year has the least number of days?",
      options : ["December","February","January","March"],
      answer :"2"
    },
    {
      ques : "Which is the largest mammal?",
      options : ["Bat","Bear","Blue Whale","None of the above"],
      answer :"3"
    }
  ],
};

function print(i,num)
{
  console.log(i+". "+num);
}
function forEach (arr, callback) {
  let i=1;
    for (const element of arr) {
        callback(i,element);
        i++;
    }
}

console.log("Welcome to "+quiz.name+"\nYou will be asked "+quiz.totalNumberofQuestions+" number of Questions, Out of which you need to score 50% to Pass.");

function quizWithSimar()
{
  
let score = 0;
for(let element in quiz.questions)
{
  
  console.log("\nQuestion: "+quiz.questions[element].ques);
  forEach(quiz.questions[element].options,print);
  const answer = readLineSync.question('');
  const correct = quiz.questions[element].answer-1;
  if(answer === quiz.questions[element].answer)
  {
    console.log("Correct Answer!");
    score ++;
  }
  else
  {
    console.log("Wrong Answer!");
    console.log("Your Answer : "+quiz.questions[element].options[answer-1]);
    console.log("Correct Answer : "+quiz.questions[element].options[correct]);
  }

}

if(score>quiz.totalNumberofQuestions/2)
{
  console.log("\nCongractulations! You have passed this Quiz! \nYour Score is : "+score);
}
else{
  console.log("\nOops! You did not pass this Quiz! \nYour Score is : "+score);
}

 const retry =  readLineSync.question('\nWould you like to Retry ? : Y/N : ');
 if(retry ==="Y")
 {
   quizWithSimar();
 }
}

quizWithSimar();