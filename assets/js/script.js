document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const questionContainer = document.getElementById("questions");
    const answerContainer = document.getElementById("answer-container");
    const introContainer = document.getElementById("intro");
    const nextButton = document.getElementById("next-question-btn");
    const startButton = document.getElementById("start-quiz-btn");
    const modalButton = document.getElementById("modal-btn");
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text")
    const span = document.getElementsByClassName("close")[0];

    let randomQuestions = [];
    let currentQuestion;
    let questionsRoundIndex = 0;
    let answerButton;
    let score = 0;
    let username = "";

    // EVENT LISTENERS AND HANDLER
    startButton.addEventListener("click", openQuiz);

    nextButton.addEventListener("click", nextQuestion);

    document.getElementById("username-input").addEventListener("submit", function (e) {
        e.preventDefault();
        username = document.getElementById("username").value;
    });

    modalButton.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }


    // FUNCTIONS
     /**
    * starting the quiz
    */
    function openQuiz() {
        username = document.getElementById("username").value;
        if (username.length > 0) {
            startQuiz();
        } else {
            alert("Please enter your username before starting the quiz 💪")
        }
    }

    /**
    * starting the quiz
    */
    function startQuiz() {
        questionsRoundIndex = 0;
        score = 0;
        randomize(questions);
        randomQuestions = questions.slice(0, 5);
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
            answerButton = document.createElement("button")
            answerButton.innerHTML = answer.text;
            answerButton.classList.add("answer-button");
            answerContainer.appendChild(answerButton);
            // idea taken from Web Dev Simplified (see aknowledgement in ReadMe)
            if (answer.correct) {
                answerButton.dataset.correct = answer.correct
            }
            answerButton.addEventListener("click", userAnswer)
        });
        modalText.innerHTML = currentQuestion.explanation;
    }

    /**
     * checking if user's anwer is correct or incorrect
     */
    function userAnswer(a) {
        const clickedBtn = a.target;
        const correct = clickedBtn.dataset.correct === "true";
        if (correct) {
            clickedBtn.classList.add("correct");
            score++;
        } else {
            clickedBtn.classList.add("incorrect");

            Array.from(answerContainer.children).forEach(answerButton => {
                if (answerButton.dataset.correct === "true") {
                    answerButton.classList.add("correct");
                }
                answerButton.disabled = true;
            });
        }
        modalButton.style.display = "block";
        nextButton.style.display = "block";
        nextButton.innerText = "NEXT";
    }


    /**
     * starting next question 
     */
    function nextQuestion() {
        if (questionsRoundIndex < randomQuestions.length) {
            Array.from(answerContainer.children).forEach(answerButton => {
                answerButton.classList.remove("correct", "incorrect");
                answerButton.disabled = false;
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
     * select 5 questions randomly with Fisher–Yates shuffle algorithm
     */
    function randomize(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * score of correct answers 
     */
    function scoreCorrect() {
        questionContainer.innerHTML = (`You had ${score} out of ${randomQuestions.length} questions correct.`);
        answerContainer.innerHTML = '';
        startButton.classList.remove("hidden");
        startButton.innerHTML = "Start a new round";
        nextButton.innerHTML = (`💜 Keep up fighting ${username} 💪 💜`);
    }
});




