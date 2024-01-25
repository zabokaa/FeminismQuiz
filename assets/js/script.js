// DATASET of questions + answers + modalText(explanation)
let questions = [
    // question1
    {
        question: "When and where was the word 'feminism' first used?",
        answers: [
            { text: "1882 in France", correct: true },
            { text: "1894 in Great Britain", correct: false },
            { text: "1968 in Germany", correct: false },
        ],
        explanation: "france"
    },
    // question2
    {
        question: "In the Weimar Republic, female civil servants were dismissed if they ...",
        answers: [
            { text: "had a child", correct: false},
            { text: "were communists", correct: false },
            { text: "got married", correct: true },
        ],
        explanation: "married"
    },
    // question3
    {
        question: "In 1919, the German National Assembly elected ...",
        answers: [
            { text: "10 per cent of female voters", correct: false },
            { text: "90 per cent of female voters", correct: true },
            { text: "women were not allowed to vote", correct: false },
        ],
        explanation: "Lorem."
    },
    // question4
    {
        question: "What happened at the Battle of Women in Leipzig in 1865?",
        answers: [
            { text: "Women's associations argued about the future constitution", correct: false },
            { text: "The first women's organisation in Germany was founded", correct: true },
            { text: "Demonstrating women threw bread and vegetables ", correct: false },
        ],
        explanation: "yes."
    },
    // question5
    {
        question: "In 1971, 374 women admitted ...",
        answers: [
            { text: "living with a woman", correct: false },
            { text: "taking the contraceptive pill", correct: false },
            { text: "have had an abortion", correct: true},
        ],
        explanation: "abortion"
    },
    // question6
    {
        question: "Since when have women been allowed to study at universities in Germany?",
        answers: [
            { text: "Since the Enlightenment in the 18th century", correct: false },
            { text: "Since the foundation of the German Empire under Bismarck in 1871", correct: false },
            { text: "Since the beginning of the Weimar Republic in 1918", correct: true },
        ],
        explanation: "1918."
    },
    // question7
    {
        question: "What was a husband allowed to do in Germany until 1958?",
        answers: [
            { text: "Terminate the wife's employment contract", correct: true },
            { text: "Force his wife to bear at least two children", correct: false },
            { text: "Forbid his wife to go to the polls", correct: false },
        ],
        explanation: "work contractão."
    },
    // question8
    {
        question: "In which country have women only been allowed to vote since 1984?",
        answers: [
            { text: "Switzerland", correct: false },
            { text: "Liechtenstein", correct: true },
            { text: "Saudi Arabia", correct: false },
        ],
        explanation: "Liechtião."
    },
    // question9
    {
        question: "What is the most common cause of death worldwide for women between the ages of 16 and 44? ",
        answers: [
            { text: "Feminicide", correct: true },
            { text: "Cancer", correct: false },
            { text: "Road traffic accidents", correct: false },
        ],
        explanation: "feminic"
    },
     // question10
     {
        question: "Until when was rape by the husband legal in Germany?",
        answers: [
            { text: "1968", correct: false },
            { text: "1997", correct: true },
            { text: "1952", correct: false },     
        ],
        explanation: "1979ão."
    }
];

// FUNCTIONS 
 /**
 * waiting for DOM to be loaded
 */   
document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz-container");
    const questionContainer = document.getElementById("questions");
    const answerContainer = document.getElementById("answer-container");
    const introContainer = document.getElementById("intro");
    const nextButton = document.getElementById("next-question-btn");
    const startButton = document.getElementById("start-quiz-btn");
//////////
// modal code from W3School
    const modalButton = document.getElementById("modal-btn");
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text")
    let span = document.getElementsByClassName("close")[0];
 
///////////////////////////
    let randomQuestions = []; 
    let currentQuestion;
    let questionsRoundIndex = 0;
    let antwort;
    let score = 0;
    let username = "";

// EVENT LISTENERS AND HANDLER
    startButton.addEventListener("click", openQuiz);
    nextButton.addEventListener("click", nextQuestion);
    document.getElementById("username-input").addEventListener("submit", function (e) {
        e.preventDefault();
        username = document.getElementById("username").value;
    });
    // modal code taken from W3School
    modalButton.onclick = function() {
        modal.style.display = "block";
        }
        span.onclick = function() {
        modal.style.display = "none";
        }


// FUNCTIONS

 /**
 * opening the quiz.html page and loading the first round
 */   
    function openQuiz() {
    questionsRoundIndex = 0;
    score = 0;
    console.log("quiz is starting"); 
    randomize(questions);
    randomQuestions = questions.slice(0, 2);  
    displayQuestion();
    startButton.classList.add("hidden");
    introContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    }       
 
/**
 * displaying the dataset
 */   
    function displayQuestion() {

        currentQuestion = randomQuestions[questionsRoundIndex]
        questionsRoundIndex++;
        questionContainer.innerHTML = "(" + questionsRoundIndex + ") " + currentQuestion.question;
        answerContainer.innerHTML = '';
        nextButton.style.display = "none";
        modalButton.style.display = "none";
        currentQuestion.answers.forEach(answer => {
           antwort = document.createElement("button")
           antwort.innerHTML = answer.text;
           antwort.classList.add("answer-button");
           answerContainer.appendChild(antwort); 
// idea taken from Web Dev Simplified (see aknowledgement in ReadMe)
           if (answer.correct) {
            antwort.dataset.correct = answer.correct
           }
           antwort.addEventListener("click", userAnswer)
    });
    //  modal-text
        modalText.innerHTML = currentQuestion.explanation;
}

    function userAnswer(a) {
        const clickedBtn = a.target;
        const correct = clickedBtn.dataset.correct === "true";
        if (correct) {
            clickedBtn.classList.add("correct");
            score++;     
            } else {
            clickedBtn.classList.add("incorrect");
       
            Array.from(answerContainer.children).forEach(antwort => {
             if (antwort.dataset.correct === "true") {
                    antwort.classList.add("correct");
                }
            antwort.disabled = true;  //will disable to click on another answer
        });
        }
        modalButton.style.display = "block";
        nextButton.style.display = "block"; // will display the next btn
        nextButton.innerText = "NEXT"; //set back, bc got changed in scoreCorrect
    }

    
/**
 * starting next question if <=5 and displaying final score after at round 6
 */
function nextQuestion() {
    if (questionsRoundIndex < randomQuestions.length) {
        Array.from(answerContainer.children).forEach(antwort => {
            antwort.classList.remove("correct", "incorrect");
            antwort.disabled = false;
          });
        displayQuestion();
    } else {
        scoreCorrect();  
        modalButton.style.display = "none";   
    }
    if (modal.style.display === "block") {
        modal.style.display = "none";
    }
}

/**
 * 6 questions for each round will be selected randomly using the Fisher–Yates shuffle algorithm
 */
    function randomize(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

/**
 * counting the correct answers of user and displaying it on last 
 */
function scoreCorrect() {
    questionContainer.innerHTML = (`You had ${score} out of ${randomQuestions.length} questions correct.`);
    answerContainer.innerHTML = '';
    startButton.classList.remove("hidden");
    startButton.innerHTML = "Start a new round";
    nextButton.innerHTML = (`💜 Keep up fighting ${username} 💪 💜`);
}
});




