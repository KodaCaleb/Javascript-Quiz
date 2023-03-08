const startButtonEl = $('#startBtn');
const questionEl = $('.question-container');
const navMenu = $('.navigation');
const options = $('#options');


let currentQuestionIndex = 0;
let currentQuestion = questionsArray[currentQuestionIndex];

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
            currentQuestionIndex++;
                if (currentQuestionIndex >= questionsArray.length) {
                    questionEl.empty().append("End Of quiz");
                    options.hide("");
                } else {
                    currentQuestion = questionsArray[currentQuestionIndex];
                    options.empty();
                    displayQuestion();
                }
            });
        });
    }
}

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











