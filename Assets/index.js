const startButtonEl = $('#startBtn');
const questionEl = $('.question-container');
const navMenu = $('.navigation');
const options = $('#options');
const wrongScore = $('.wrong') 
const rightScore = $('.right')


let currentQuestionIndex = 0;
let currentQuestion = questionsArray[currentQuestionIndex];
let wrongIndex = 0;
let rightIndex = 0;

const startQuiz = function() {
    startButtonEl.on('click', function(){
        timer()
        startButtonEl.hide("");
        displayQuestion();
    });
};

const displayQuestion = function() {
    questionEl.empty().append(questionsArray[currentQuestionIndex].text);
    if (currentQuestion) {
        currentQuestion.answers.forEach(function(choice) {
            let button = document.createElement('button');
            button.setAttribute("class", "btn btn-primary")
            button.textContent = choice;
            options.append(button);
            button.addEventListener('click', function() {
                const selectedAnswer = choice;
                checkAnswer(selectedAnswer);
            });
        });
    }
};


const updateAnswers = function(){
    $(".right").text("Correct: " + rightIndex)
    $(".wrong").text("Incorrect: " + wrongIndex)

}



const checkAnswer = function(selectedAnswer) {
    if (selectedAnswer === currentQuestion.ca) {
        rightIndex++;
        console.log("Right answers: " + rightIndex);
    } else {
        wrongIndex++;
        console.log("Wrong answers: " + wrongIndex);
    }
    updateAnswers()
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

const timer = function() {
    const duration = 120;
    const timerEl = $('#timer-el')
    let remainingTime = duration
    timerEl.text(remainingTime);
    const timerInterval = setInterval(()=>{
        remainingTime--
        timerEl.text(remainingTime);
        if (remainingTime <= 0) {
            clearInterval(timerInterval)
            timerEl.text("Time's Up!");
        }
    }, 1000)
}




startQuiz();











