// DECLARE "Questions" objects
var questionsArray = [
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
// DECLARE "Countdown" number
var countdown = 60;
// Event listener / button to start Function 'startGame'
var startButton = document.querySelector('#game-start');
// DECLARE the 'timerEl' variable pointing to timer ID in html
var timerEl = document.querySelector('#timer');
// Div container which displays the Start game page
var startPage = document.querySelector('#start-page');
// Targets Question screen div container
var questionScreen = document.querySelector('#question-screen');
// Logs the index number of question property in questionArray
var questionIndex = 0;
// HTML element displaying current question on game screen
var questionEl = document.querySelector("#current-question");
// HTML element displaying selectable answers on game screen
var choiceEl = document.querySelector('#possible-answers');

function timer() {
    // if timer reaches 0, end quiz function
    var timerInterval = setInterval(function() {
        countdown--;
        timerEl.textContent = countdown ;
    
        if(countdown === 0) {
        // Stops execution of action at set interval
          clearInterval(timerInterval);
        // Calls function to end the quiz
          endQuiz();
        }
      }, 1000);
};

function startGame() {
    // Hide start screen
    startPage.setAttribute("class", "hide");
    // Show first question screen
    displayQuestion();
    // Begin timer countdown (call an outside function)
    timer();
};

function displayQuestion() {
    // Removes "hide" attribute from questionScreen div
    questionScreen.removeAttribute("class", "hide");
    // updates HTML to display question
    questionEl.textContent = questionsArray[questionIndex].question
    // Variable to catch answer choices within current question
    var answerList = questionsArray[questionIndex].possibleAnswers
    // displays answer choices
    for (let i = 0; i < answerList.length; i++) {
        // How do append as <li> item?
        var answerChoice = document.createElement('li');
        answerChoice.textContent = answerList[i];
        choiceEl.append(answerChoice);

        // choiceEl.append(answerList[i]+" ");
        
    }
        // capture click event where user is clicking
        // verify answer is correct
    // call answerQuestion to answer
    answerQuestion();
    // Hide answered question
    // display next question
};

function answerQuestion() {
    // Check if selected answer is correct
    // IF the answer is wrong
    // THEN we need to subtract 15 secs from countdown timer function
    // Update timerEl to display time remaining
    // If wrong, timer -= 10
    // Update questionIndex ++ to advance to next question
    // Move on to next question
    // If timer function ends, endQuiz()
    // IF all questions are answered
    // THEN quiz will end
    // compare index numbers in questions array to verify quiz is over
    // IF questionIndex > 4, endQuiz();
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

startButton.addEventListener("click", startGame);