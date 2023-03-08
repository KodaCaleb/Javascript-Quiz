const startButtonEl = $('#startBtn');
const questionEl = $('.question-container');
const navMenu = $('.navigation');
const options = $('#options');
const wrongScore = $('.wrong');
const rightScore = $('.right');

let currentQuestionIndex = 0;
let currentQuestion = questionsArray[currentQuestionIndex];
let wrongIndex = 0;
let rightIndex = 0;
let remainingTime;

const startQuiz = function() {
    startButtonEl.on('click', function(){
        remainingTime = 60;
        timer();
        startButtonEl.hide("");
        displayQuestion();
        const timerInterval = setInterval(()=>{
            remainingTime--;
            $('#timer-el').text(remainingTime);
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                remainingTime = 0;
                $('#timer-el').text("Time's Up!");
                endGame();
            }
        }, 1000);
    });
};

const displayQuestion = function() {
    questionEl.empty().append(questionsArray[currentQuestionIndex].text);
    if (currentQuestion) {
        currentQuestion.answers.forEach(function(choice) {
            let button = document.createElement('button');
            button.setAttribute("class", "btn btn-primary");
            button.textContent = choice;
            options.append(button);
            button.addEventListener('click', function() {
                const selectedAnswer = choice;
                checkAnswer(selectedAnswer);
            });
        });
    }
};

const updateAnswers = function() {
    $(".right").text("Correct: " + rightIndex);
    $(".wrong").text("Incorrect: " + wrongIndex);
};

const checkAnswer = function(selectedAnswer) {
    if (selectedAnswer === currentQuestion.ca) {
        rightIndex++;
        console.log("Right answers: " + rightIndex);
    } else {
        wrongIndex++;
        console.log("Wrong answers: " + wrongIndex);
        remainingTime -= 10;
    }
    updateAnswers();
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsArray.length) {
        questionEl.empty().append("GAME OVER");
        options.hide("");
    } else {
        currentQuestion = questionsArray[currentQuestionIndex];
        options.empty();
        displayQuestion();
    }
};

const endGame = function(){
    questionEl.empty().append("GAME OVER");
    options.hide("");

}

const timer = function() {
    $('#timer-el').text(remainingTime);
};

startQuiz();


