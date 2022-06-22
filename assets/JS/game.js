// DECLARE "Countdown" number
var countdown = 60;

// DECLARE "Questions" objects
var questions = [
    {
        question: "Which of the following hotkeys rotates the viewport?",
        possibleAnswers: ["A: Shift + click",
                        "B: Mousewheel click",
                        "C: Shift + Mousewheel click",
                        "D: None of the above"],
        correctAnswer: "B: Mousewheel click"
    }, 
    {
        question: "In the layout workspace, what does shift + right click do?",
        possibleAnswers: ["A: Shows tools",
                        "B: Shows viewport options",
                        "C: Places 3D Cursor",
                        "D: None of the above"],
        correctAnswer: "C: Places 3D Cursor"
    },
    {
        question: "Besides the modeling workspace, how else can object modeling be accessed?",
        possibleAnswers: ["A: Edit mode",
                        "B: Sculpt mode",
                        "C: Object mode",
                        "D: None of the above"],
        correctAnswer: "A: Edit mode"
    },
    {
        question: "Which hotkey can be used to extrude a face from an object?",
        possibleAnswers: ["A: Ctrl (command) + E",
                        "B: Alt (option) + E",
                        "C: Shift + E",
                        "D: None of the above"],
        correctAnswer: "D: None of the above"
    },
    {
        question: "In the Modeling workspace, what does the Tab key do?",
        possibleAnswers: ["A: Toggles between Object and Edit mode",
                        "B: Shows tools",
                        "C: Selects next object",
                        "D: None of the above"],
        correctAnswer: "A: Toggles between Object and Edit mode"
    },
];

// Event listener / button to start Function 'startGame'
var startGame = document.querySelector('#game-start');

// DECLARE the 'timerEl' variable pointing to timer ID in html
var timerEl = document.querySelector('#timer');

function timer() {
    // if timer reaches 0, end quiz function
};

var startPage = document.querySelector('#start-page');

function startGame() {
    // Hide start screen
    startPage.style.display="none";
    // Show first question screen
    displayQuestion();
    // Begin timer countdown (call an outside function)
    timer();
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
