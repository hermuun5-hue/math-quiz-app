let questions = [
  {
    question: "12 + 5 = ?",
    answers: [71, 17, 45],
    correct: 17
  },
  {
    question: "33 + 34 = ?",
    answers: [69, 67, 13],
    correct: 67
  },
  {
    question: "80 + 65 = ?",
    answers: [154, 129, 142],
    correct: 145
  },
  {
    question: "37 + 23 = ?",
    answers: [36, 87, 60],
    correct: 60
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  let q = questions[currentQuestion];

  document.getElementById("question").innerText = q.question;

  let buttons = document.querySelectorAll("#quiz button");

  buttons[0].innerText = q.answers[0];
  buttons[1].innerText = q.answers[1];
  buttons[2].innerText = q.answers[2];
}

function checkAnswer(answer) {
  let q = questions[currentQuestion];

  document.getElementById("quiz").style.display = "none";

  if (answer === q.correct) {
    score++;
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("wrong").style.display = "block";
  }
}

function nextQuestion() {
  currentQuestion++;

  document.getElementById("correct").style.display = "none";

  if (currentQuestion < questions.length) {
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
  } else {
    showFinal();
  }
}

function retry() {
  document.getElementById("wrong").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}

function showFinal() {
  document.body.innerHTML = `
    <h1>Your Score: ${score} / ${questions.length}</h1>
  `;
}

// load first question
loadQuestion();