var startBtn = document.getElementById("startbtn");
var questions1 = document.getElementById("question1-screen");
var questions2 = document.getElementById("question2-screen");
var questions3 = document.getElementById("question3-screen");
var questions4 = document.getElementById("question4-screen");
var questions5 = document.getElementById("question5-screen");
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



}

//FUNCTIONS TO MOVE TO NEXT PAGE

function showQuestions1() {
    questions1.style.display = "block";
    questions1.style.visibility = "visible";
    quizIntro.style.display = "none";
    quizIntro.style.visibility = "hidden";
    currentQuestion++
    console.log(currentQuestion);
}

function rightAnswer() {
    currentQuestion++
    //1. store value
    //2. go to next question
    console.log(currentQuestion);
    if (currentQuestion = 1) {
        questions2.style.display = "block";
        questions2.style.visibility = "visible";
        questions1.style.display = "none";
        questions1.style.visibility = "hidden";
        currentQuestion++
    }

    else if (currentQuestion = 2) {
        console.log("coolbeans");
        questions3.style.display = "block";
        questions3.style.visibility = "visible";
        questions2.style.display = "none";
        questions2.style.visibility = "hidden";
        currentQuestion++
    }

    else if (currentQuestion = 3) {
        questions4.style.display = "block";
        questions4.style.visibility = "visible";
        questions3.style.display = "none";
        questions3.style.visibility = "hidden";
        currentQuestion++
    }

}


function wrongAnswer() {
    //1. subtract time
    //2. add -1 to score
    //3. go to next question
    if (currentQuestion = 1) {
        questions2.style.display = "block";
        questions2.style.visibility = "visible";
        questions1.style.display = "none";
        questions1.style.visibility = "hidden";
        currentQuestion++
    }

}



function showLastPage() {
    if (currentQuestion >= 5) {
        //1. hide current page
        //2. display last page
        //3. display stored value
    }

}


//BUTTON EVENTS

startBtn.addEventListener("click", hey)
startBtn.addEventListener("click", showQuestions1)
