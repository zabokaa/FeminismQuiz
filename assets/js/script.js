// DATASET of questions+answers
let questions = [
    // question1
    {
        question: "When and where was the word 'feminism' first used?",
        answers: [
            { text: "1882 in France", correct: true },
            { text: "1894 in Great Britain", correct: false },
            { text: "1968 in Germany", correct: false },
        ]
    },
    // question2
    {
        question: "In the Weimar Republic, female civil servants were dismissed if they ...",
        answers: [
            { text: "had a child", correct: false},
            { text: "were communists", correct: false },
            { text: "got married", correct: true },
        ]
    },
    // question3
    {
        question: "In 1919, the German National Assembly elected ...",
        answers: [
            { text: "10 per cent of female voters", correct: false },
            { text: "90 per cent of female voters", correct: true },
            { text: "women were not allowed to vote", correct: false },
        ]
    },
    // question4
    {
        question: "What happened at the Battle of Women in Leipzig in 1865?",
        answers: [
            { text: "Women's associations argued about the future constitution", correct: false },
            { text: "The first women's organisation in Germany was founded", correct: true },
            { text: "Demonstrating women threw bread and vegetables ", correct: false },
        ]
    },
    // question5
    {
        question: "In 1971, 374 women admitted ...",
        answers: [
            { text: "living with a woman", correct: false },
            { text: "taking the contraceptive pill", correct: false },
            { text: "have had an abortion", correct: true},
        ]
    },
    // question6
    {
        question: "Since when have women been allowed to study at universities in Germany?",
        answers: [
            { text: "Since the Enlightenment in the 18th century", correct: false },
            { text: "Since the foundation of the German Empire under Bismarck in 1871", correct: false },
            { text: "Since the beginning of the Weimar Republic in 1918", correct: true },
        ]
    },
    // question7
    {
        question: "What was a husband allowed to do in Germany until 1958?",
        answers: [
            { text: "Terminate the wife's employment contract", correct: true },
            { text: "Force his wife to bear at least two children", correct: false },
            { text: "Forbid his wife to go to the polls", correct: false },
        ]
    },
    // question8
    {
        question: "In which country have women only been allowed to vote since 1984?",
        answers: [
            { text: "Switzerland", correct: false },
            { text: "Liechtenstein", correct: true },
            { text: "Saudi Arabia", correct: false },
        ]
    },
    // question9
    {
        question: "What is the most common cause of death worldwide for women between the ages of 16 and 44? ",
        answers: [
            { text: "Feminicide", correct: true },
            { text: "Cancer", correct: false },
            { text: "Road traffic accidents", correct: false },
        ]
    },
     // question10
     {
        question: "Until when was rape by the husband legal in Germany?",
        answers: [
            { text: "1968", correct: false },
            { text: "1997", correct: true },
            { text: "1952", correct: false },     
        ]
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
    const nextBtn = document.getElementById("next-question-btn");
    const startButton = document.getElementById('start-quiz-btn');
    let randomQuestions = []; 
    let currentQuestion;
    let questionsRoundIndex = 0;
    let antwort;
    let score = 0;

// EVENT LISTENERS AND HANDLER
    startButton.addEventListener("click", openQuiz);
    nextBtn.addEventListener("click", nextQuestion);
// FUNCTIONS

 /**
 * opening the quiz.html page and loading the first round
 */   
    function openQuiz() {
    questionsRoundIndex = 0;
    score = 0;
    console.log("quiz is starting"); 
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
        nextBtn.style.display = "none";
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
        nextBtn.style.display = "block"; // will display the next btn
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
    // calling the func
    randomize(questions);
    randomQuestions = questions.slice(0, 2);  
    console.log(randomQuestions);


/**
 * counting the correct answers of user and displaying it on last 
 */
function scoreCorrect() {
    questionContainer.innerHTML = (`You had ${score} out of ${randomQuestions.length} questions correct.`);
    answerContainer.innerHTML = '';
    startButton.classList.remove("hidden");
    startButton.innerHTML = "Start a new round";
    nextBtn.innerText = "💜 Keep up fighting 💪 💜";
}
});




