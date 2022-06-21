console.log("game.js linked");

// DECLARE "Countdown" number
var countdown = 60;

// DECLARE "Questions" objects
var questions = [
    {
        // question
        // answers
        // correct answer
    },
    {
        // question
        // answers
        // correct answer
    }
];



// DECLARE the 'timerEl' variable pointing to timer ID in html
var timerEl = document.querySelector('#timer');
// Event listener / button to start Function 'startGame'

// timer function
    // if timer reaches 0, end quiz function

function startGame() {
    // Hide start screen 
    // Show first question screen

    // Begin timer countdown (call an outside function)
    // Display timer on page (append?)
};

function displayQuestion() {
    // var currentQuestion = question[i];
    // update HTML to display question
    // display answer choices
        // capture click event where user is clicking
        // verify answer is correct
    // call answerQuestion to answer
    // Hide answered question
    // display next question
};

function answerQuestion() {
    // Check if selected answer is correct
        // IF the answer is wrong
        // THEN we need to subtract 15 secs from countdown timer function
        // Update timerEl to display time remaining
    // Move on to next question
        // IF all questions are answered
        // THEN quiz will end
        // compare index numbers in questions array to verify quiz is over
        // else displayQuestion();
};

function endQuiz() {
    // Timer stops
    // hide questions
    // Display end screen
    // Display final score
    // Ask if user wants to play again
    // re-direct to high scores page
};

function hiScore() {
    // saves high score to local storage
};
