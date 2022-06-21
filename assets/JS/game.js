// DECLARE "Countdown" number
var countdown = 60;

// DECLARE "Questions" objects
var questions = [
    {
        question: "Which of the following hotkeys rotates the viewport?",
        answer1: "A: Shift + click",
        answer2: "B: Mousewheel click",
        answer3: "C: Shift + Mousewheel click",
        answer4: "D: None of the above",
        correctAnswer: answer2
    }, 
    {
        question: "In the layout workspace, what does shift + right click do?",
        answer1: "A: Shows tools",
        answer2: "B: Shows viewport options",
        answer3: "C: Places 3D Cursor",
        answer4: "D: None of the above",
        correctAnswer: answer3
    },
    {
        question: "Besides the modeling workspace, how else can object modeling be accessed?",
        answer1: "A: Edit mode",
        answer2: "B: Sculpt mode",
        answer3: "C: Object mode",
        answer4: "D: None of the above",
        correctAnswer: answer1
    },
    {
        question: "Which hotkey can be used to extrude a face from an object?",
        answer1: "A: Ctrl (command) + E",
        answer2: "B: Alt (option) + E",
        answer3: "C: Shift + E",
        answer4: "D: None of the above",
        correctAnswer: answer4
    },
    {
        question: "In the Modeling workspace, what does the Tab key do?",
        answer1: "A: Toggles between Object and Edit mode",
        answer2: "B: Shows tools",
        answer4: "C: Selects next object",
        answer3: "D: None of the above",
        correctAnswer: answer1
    },
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
