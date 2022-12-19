var startBtn = document.getElementById("startbtn");
var questions = document.getElementById("question1-screen");
var quizIntro = document.getElementById("quiz-intro")
var hideQuestions = true
var currentQuestion = 0

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function hey() {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
    console.log("hey pee pee head");


}

function showQuestions() {
    questions.style.display = "block";
    questions.style.visibility = "visible";
    quizIntro.style.display = "none";
    quizIntro.style.visibility = "hidden";
    currentQuestion++

}

function wrongAnswer() {
    //1. subtract time
    //2. store value
    //3. go to next question
}

function rightanswer() {
    //1. store value
    //2. go to next question
}

function showLastPage() {
if (currentQuestion >= 5){
    //1. hide current page
    //2. display last page
    //3. display stored value
}
 
}

startBtn.addEventListener("click", hey)
startBtn.addEventListener("click", showQuestions)
