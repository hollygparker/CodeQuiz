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

var questionsContainer = document.getElementbyId("questions")
var = document.getElementbyId("qTitle")
var = document.getElementbyId("options")
var = document.getElementbyId("optA")
var = document.getElementbyId("optB")
var = document.getElementbyId("optC")
var = document.getElementbyId("optD")
var = document.getElementbyId("seconds")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")
var = document.getElementbyId("")

// * THEN a timer starts and I am presented with a question
// ? Will need two functions - one for timer, one for presenting question
// todo function for question
// todo create objects for each question and the set of answers, and the correct answer
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