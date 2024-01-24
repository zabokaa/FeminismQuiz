// data set of questions+answers
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
            { text: "no women at all", correct: true },
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

// defining global variables:




 /**
 * waiting for DOM to be loaded
 */   
document.addEventListener("DOMContentLoaded", function() {
    const questionContainer = document.getElementById("questions");
const answerContainer = document.getElementById("answer-container");
const homeBtn = document.getElementById("back-home-btn");
const nextBtn = document.getElementById("next-question-btn");
const answerButtons = document.querySelectorAll('.answer-button');
const startButton = document.getElementById('start-quiz-btn');
let randomQuestions = []; 
let questionsRoundIndex = 0;
// EVENT LISTENERS AND HANDLER
    // for testing only:
    // console.log(startButton);
    startButton.addEventListener("click", openQuiz);
// FUNCTIONS

 /**
 * opening the quiz.html page and loading the first round
 */   
    function openQuiz() {
    questionsRoundIndex = 0;
    console.log("quiz is starting"); 
    displayQuestion();
    }       

/**
 * displaying the dataset
 */   
    // function setNextQuestion() {
    //     displayQuestion(randomQuestions[questionsRoundIndex]);

    //     }
 
/**
 * using questions data couples and assigning a number
 */   
    function displayQuestion() {
        let currenQuestion = randomQuestions[questionsRoundIndex]
        questionsRoundIndex++;
        questionContainer.innerHTML = questionsRoundIndex + "." + currenQuestion.question;

        answerContainer.innerHTML = '';

        currenQuestion.answers.forEach(answer => {
           let antwort = document.createElement("button")

           antwort.innerHTML = answer.text;
           antwort.classList.add("answer-button");
           answerContainer.appendChild(antwort); 
         
    });
}

    



// FUNCTIONS



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
    randomQuestions = questions.slice(0, 6);  
    console.log(randomQuestions);

// /**
//  * comparing the selected answer of the user with the stored answer
//  */
// function checkAnswer () {

// }

// /**
//  * counting the correct answers of user and displaying it on last 
//  */
// function scoreCorrect () {

// }

// /**
//  * starting next question if <=5 and displaying final score after at round 6
//  */
// function nextQuestion () {

// }

});

// nextButton.addEventListener("click", nextQuestion);

// start(); 

