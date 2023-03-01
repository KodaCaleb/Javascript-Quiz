
const startBtn = $("#startBtn");
let quesTitles = questions.map(question => question.text);


function showQuestion(){
    const randomIndex = Math.floor(Math.random() * quesTitles.length);
    const randomTitle = quesTitles[randomIndex];
    $(".question-container").text(randomTitle);
    console.log(randomTitle);
    quesTitles.splice(randomIndex, 1);
    if (quesTitles.length === 0) {
        quesTitles = questions.map(question => question.text);
    }
    startBtn.hide();
    createNextBtn()
}


function createNextBtn() {
    if ($("#nextBtn").length === 0) {
        var $input = $('<input type="button" value="Next" id="nextBtn" />');
        $input.appendTo($(".navigation"));
        $input.on("click", showQuestion);
    }
}

startBtn.on("click", showQuestion);

