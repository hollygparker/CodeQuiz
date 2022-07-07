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
var answer = document.getElementById("answer")
var endingQuiz = document.getElementById("endQuiz")
var highscores = document.getElementById("highscores")
var name = document.getElementById("name")
var finalScore = document.getElementById("finalScore")
var playAgain = document.getElementById("playAgain")
var submitScore = document.getElementById("submitScore")
var userInitials = document.getElementById("userInitials")
// var = document.getElementById("")
// var = document.getElementById("")


// hides initials, highscores, and play again button on initial page load
initials.style.display = "none"
endingQuiz.style.display = "none"
highscores.style.display = "none"
playAgain.style.display = "none"
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
var questionsIndex = 0;

function startQuiz() {
    begin.style.display = "none"
    beginButton.style.display = "none"
    initials.style.display = "none"
    console.log('hi')
    var beginTimer = setInterval(function () {
        incorrectAnswers++
        time--;
        seconds.textContent = time;
        if (time < 0 || questionsIndex === questionsContainer.length - 1) {
            clearInterval(beginTimer);
            console.log("Correct " + correctAnswers)
            console.log("Incorrect " + incorrectAnswers)
            endQuiz()
        }
        //will lower the time by 1 sec
        }, 1000);
        displayQuestions()
    }

    //function  to display the current question based on the index of the arr
    function displayQuestions() {
        qTitle.textContent = questionsContainer[questionsIndex].question;
        optA.textContent = questionsContainer[questionsIndex].optionA;
        optB.textContent = questionsContainer[questionsIndex].optionB;
        optC.textContent = questionsContainer[questionsIndex].optionC;
        optD.textContent = questionsContainer[questionsIndex].optionD;

        optA.addEventListener('click', checkAnswerChoice)
        optB.addEventListener('click', checkAnswerChoice)
        optC.addEventListener('click', checkAnswerChoice)
        optD.addEventListener('click', checkAnswerChoice)
    }
    
    function checkAnswerChoice(event) {
        var correctAnswer = questionsContainer[questionsIndex].answer
        console.log(correctAnswer)

        if (event.target.textContent === correctAnswer) {
            correctAnswers += 1
            answer.textContent = "Correct!"
            answer.style.backgroundColor = "green"
            questionsIndex++

            if (questionsIndex < questionsContainer.length) {
                answer.textContent = "Correct!"
                answer.style.backgroundColor = "green"
                setTimeout(function() {
                    displayQuestions() 
                }, 600)
            }
        } else {
            answer.textContent = "Incorrect! The correct answer is: " + correctAnswer
            answer.style.backgroundColor = "lightblue"
            time -= 10
            questionsIndex++
            setTimeout(function() {
                displayQuestions()
            }, 600)
        }
    }

    function endQuiz() {
        console.log("END")
    
        // hide question
        // questionsContainer.style.display = "none"
        qTitle.style.display = "none"
        options.style.display = "none"
        answer.style.display = "none"

        // show end screen with initials input
        initials.style.display = "block"
        endingQuiz.style.display = "block"
        highscores.style.display = "block"
        playAgain.style.display = "block"

        submitScore.addEventListener('click', function submitHighscore() {
            console.log('submit button clicked')

        })


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