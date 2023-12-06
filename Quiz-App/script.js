const Questions = [
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    correctAnswer: "Canberra"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "George Orwell", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "What is the currency of Brazil?",
    options: ["Peso", "Real", "Dollar", "Euro"],
    correctAnswer: "Real"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "In what year did the first manned moon landing occur?",
    options: ["1965", "1969", "1975", "1982"],
    correctAnswer: "1969"
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Charlotte Brontë", "Charles Dickens", "Emily Brontë"],
    correctAnswer: "Jane Austen"
  },
  {
    question: "What is the capital of South Africa?",
    options: ["Johannesburg", "Cape Town", "Durban", "Pretoria"],
    correctAnswer: "Pretoria"
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
    correctAnswer: "Alan Turing"
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    correctAnswer: "12"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the speed of light?",
    options: ["299,792 kilometers per second", "150,000 kilometers per second", "500,000 kilometers per second", "1,000,000 kilometers per second"],
    correctAnswer: "299,792 kilometers per second"
  },
  {
    question: "Which continent is the largest?",
    options: ["Asia", "Africa","North America", "South America"],
    correctAnswer: "Asia"
  }
];


let question = document.querySelector(".question");
let OPTIONS = document.querySelector(".OPTIONS");
let questionIndex = 0;
let questionNo = 0;
let QuesObject;
let result = document.querySelector(".result");
let Score = document.querySelector(".Score");
let score = 0;
let nextBtn = document.getElementById("next");

function startQuiz() {
      nextBtn.style.display = "none";
      result.innerHTML = "<h4>Please Click ONE OPTION Only</h4>";
      QuesObject = Questions[questionIndex];
      console.log(QuesObject);
      question.textContent = (questionNo + 1)+".  "+QuesObject.question;

      QuesObject.options.forEach((option,index)=>{
      const DivElement = document.createElement("div");
      DivElement.className ="option";
      DivElement.textContent = option;
      DivElement.addEventListener("click",()=>{
        click(index,DivElement);
        console.log(DivElement);
      });
      
      OPTIONS.appendChild(DivElement);

      
      });
}

function click(index,Div) {
    let yourAns = Questions[questionIndex].options[index];
    console.log(yourAns);
    check(yourAns,Div);
    console.log(Div);
    
}

function check(yourAns,Div) {
  if (Questions[questionIndex].correctAnswer == yourAns) {
    result.textContent = "Correct Answer 🥳🤩";
    Div.style.backgroundColor = "rgb(50, 153, 74)";
    score += 1;
    Score.textContent = score+ "/" + Questions.length;
  } else {
    result.textContent = "Incorrect Answer 🤣.Correct Answer is :"+ Questions[questionIndex].correctAnswer;
    Div.style.backgroundColor = "rgb(196, 64, 64)";
    Score.textContent = score+ "/" + Questions.length;
  }

  if (questionIndex < Questions.length -1) {
      setTimeout(()=>{
        nextBtn.style.display = "block";
      },2000);
  } else {
    setTimeout(()=>{
      result.innerHTML = "<h1>Question Completed</h1>";
    },3000);
  }
}

function next() {
  questionIndex +=1;
  questionNo += 1; 
  OPTIONS.innerHTML = "";
  result.textContent = "";
  startQuiz();
}
startQuiz();