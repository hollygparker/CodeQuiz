// todo remember to use strings
// * hiding elements and showing elements
// todo hide previous, show next
// todo use local storage for saving the score 
// ! score is building up the whole time 
// * time decreases when answer is incorrect
// * correct or incorrect displays when a user clicks 
// * REFERENCE WEB APIS 26 LOCAL STORAGE TO DOS FOR QUESTIONS
// * REFERENCE WEB APIS 9 AND 10 TIMERS INTERVALS FOR TIMER FUNCTION
// * REFERENCE THIRD PARTY APIS #5 FOR QUESTION ANSWER OPTIONS
// ---------------------------------------------------------------------

var questionsContainer = document.getElementById("questions")
var qTitle = document.getElementById("qTitle")
var options = document.getElementById("options")
var optA = document.getElementById("optA")
var optB = document.getElementById("optB")
var optC = document.getElementById("optC")
var optD = document.getElementById("optD")
var seconds = document.getElementById("seconds")
var begin = document.getElementById("begin")
var beginButton = document.getElementById("beginButton")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")
// var = document.getElementById("")

// * THEN a timer starts and I am presented with a question
// ? Will need two functions - one for timer, one for presenting question
// todo function for question


// todo create an array of objects for each question and the set of answers, and the correct answer

// hides initials on initial page load
initials.style.display = "none"

// questions array of objects 
var questionsContainer = [{
    question: "Which of the following options contains both of the data types that JavaScripts accepts?",
    optionA: "letter & string",
    optionB: "thread & number",
    optionC: "digit & string",
    optionD: "string & number",
    answer: "string & number"
},
{
    question: "What is another way of saying to call a function?",
    optionA: "provoke",
    optionB: "invoke",
    optionC: "artichoke",
    optionD: "baroque",
    answer: "invoke"
},
{
    question: "What does DOM stand for?",
    optionA: "Directory of Machines",
    optionB: "Digitally Oriented Moms",
    optionC: "Document Object Model",
    optionD: "Developers on Mars",
    answer: "Document Object Model"
},
{
    question: "How would you pull 'Sagittarius' from the following array? var signs = ['Sagittarius', 'Leo', 'Capricorn']",
    optionA: "signs(1)",
    optionB: "signs[1]",
    optionC: "signs(0)",
    optionD: "signs[0]",
    answer: "signs[0]"
}]


var correctAnswers = 0;
var incorrectAnswers = 0;
var time = 60;
var questionsContainerArr=0;

function startQuiz() {
    begin.style.display = "none"
    beginButton.style.display = "none"
    initials.style.display = "none"
    console.log('hi')
    var beginTimer = setInterval(function () {
        incorrectAnswers++
        time--;
        seconds.textContent = time;
        if (time < 0 || questionsContainerArr === questionsContainer.length - 1) {
            clearInterval(beginTimer);
            console.log("Correct " + correctAnswers)
            console.log("Incorrect " + incorrectAnswers)
            endQuiz()
        }
        //will lower the time by 1 sec
        }, 1000);
        displayQuestion()
    }

    //function  to display the current question based on the index of the arr
    function displayQuestion() {
        qTitle.textContent = questionsContainer[questionsContainerArr].question;
        optA.textContent = questionsContainer[questionsContainerArr].optionA;
        optB.textContent = questionsContainer[questionsContainerArr].optionB;
        optC.textContent = questionsContainer[questionsContainerArr].optionC;
        optD.textContent = questionsContainer[questionsContainerArr].optionD;

        optionA.addEventListener('click', checkAnswerChoice)
        optionB.addEventListener('click', checkAnswerChoice)
        optionC.addEventListener('click', checkAnswerChoice)
        optionD.addEventListener('click', checkAnswerChoice)
    }


beginButton.addEventListener('click', startQuiz)
// todo call questions based on index - first question would be question[0], then question[1], and so on.
// todo when question[0] is in a visible state, the remainder of the questions need to be in a hidden state, and vice versa for all questions

// * WHEN I answer a question
// todo add event listener for click on question options
// * THEN I am presented with another question
// * WHEN I answer a question incorrectly
// * THEN time is subtracted from the clock
// todo timer function if !correct > clock time - subtract seconds
// todo ELSE store a score point to local storage using localStorage.setItem
// ? the question function and timer function will need to interact with each other 
// * WHEN all questions are answered or the timer reaches 0
// ? again, functions will be interacting with each other 
// todo WHEN all questions are answered - when question array has been gone through
// ! OR 
// todo the timer reaches 0
// * THEN the game is over
// * WHEN the game is over
// * THEN I can save my initials and my score
// todo game over > populate box to enter initials 
// todo get score from local storage using localStorage.getItem() 
// todo may need to use JSON parse method