const startButtonEl = $('#startBtn');
const questionEl = $('.question-container')
const navMenu = $('.navigation')
const optionBoxes = $('#o1, #o2, #o3, #o4')

const nextButtonEl = $('<button> Next </button>')

let currentQuestionIndex = 0
const wrongAnswers = questionsArray[currentQuestionIndex].wa


const startQuiz = function() {
startButtonEl.on('click', function () {
    startButtonEl.hide()
    questionEl.empty().append(questionsArray[currentQuestionIndex].text);
    navMenu.empty().append(nextButtonEl)  
    // console.log(questionsArray[currentQuestionIndex].wa) 
    fillBoxes()
        nextButtonEl.on('click', function(){
            currentQuestionIndex++
            if (currentQuestionIndex < questionsArray.length){
                questionEl.empty().append(questionsArray[currentQuestionIndex].text)
                console.log(questionsArray[currentQuestionIndex].wa)
            } else {
                questionEl.empty().append("End Of quiz")
                nextButtonEl.hide()
            }
        })
    });
}




// create a function that randomizes wa array index and appends to objectBoxes variable then we can put this function in the stead of console.log

const fillBoxes = function() {
    
    optionBoxes.empty().append(wrongAnswers)

}







startQuiz()




// currentQuestionIndex is how we are moving through the array 


// ? how do I assign the randomness to the option boxes