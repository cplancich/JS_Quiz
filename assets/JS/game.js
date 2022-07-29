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
var countdown = 30;
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
var timerInterval;
// end screen
var endScreen = document.querySelector('#end-screen');
// Hight scores
var hiScores = document.querySelector('#high-scores');
// end time / final score
var endTime = document.querySelector('#end-time');
// form element for submission
var submitForm = document.querySelector('#hi-score-name')
// top 5 scores
var top5 = document.querySelector('#top-5-scores');


function timer() {
    // if timer reaches 0, end quiz function
    timerInterval = setInterval(function() {
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
    choiceEl.innerHTML = "";
    for (let i = 0; i < answerList.length; i++) {
        // Appends answer choices as <li> items to page
        var answerChoice = document.createElement('button');
        answerChoice.textContent = answerList[i];
        choiceEl.append(answerChoice);
        answerChoice.classList.add("choice");
    }
    };
    
    console.log(choiceEl);
    function answerQuestion(event) {
        
        if (countdown < 0){
            countdown = 0;
        }

        var correctAnswer = questionsArray[questionIndex].correctAnswer;
        var userSelection = event.target.innerHTML;
        
        console.log(event)
        if (userSelection!==correctAnswer) {
            countdown -= 15
            timerEl.textContent = countdown;
            // Add visual feedback that displays answer is wrong (red box styling?)
        } else {
            // Visual feedback for correct answer
        }
        // Move on to next question
        questionIndex++;
        if (questionIndex===questionsArray.length) {
            endQuiz();
        } else {
            displayQuestion();
        }
    };
    
    function endQuiz() {
        console.log("Game over");
        // Timer stops
        clearInterval(timerInterval);
        // hide questions
        questionScreen.setAttribute("class", "hide");
        // Display end screen
        endScreen.removeAttribute("class", "hide");

        // Display final score
        endTime.textContent = countdown;
        // Create HTML form to add user input name to local storage
        // prevent default with submit button
        
        // submit re-directs to high scores page
        
    };
    
    function hiScore(event) {
        var initials = document.querySelector("#initials-input").value;
        console.log(initials);
        console.log(countdown);
        
        event.preventDefault();
        // saves high score to local storage
        console.log("Form Submitted")
        saveHiScore(initials, countdown);
            // Save user name and score as an object with two parameters
            initials = "";
        viewScores();
    };

    function saveHiScore(initials, score) {
        var newScore = {
            name: initials,
            score: score,
        }

        var scoreData = JSON.parse(localStorage.getItem("userScore"))||[];
        scoreData.push(newScore);
        localStorage.setItem("userScore", JSON.stringify(scoreData));

    }
    
    function viewScores() {
        // Hide previous screen
        endScreen.setAttribute("class", "hide");
        // Show Hi score screen
        hiScores.removeAttribute("class","hide");
        // Append hi scores to page
            // get from local storage
            var scoreData = JSON.parse(localStorage.getItem("userScore"))||[];
            // display as <li> items within #top-5-scores id
            for (let i = 0; i < scoreData.length; i++) {
                var listEl = document.createElement("li")
                listEl.textContent = scoreData[i].name + `:` + scoreData[i].score
                top5.appendChild(listEl);
                
            }
    }

    startButton.addEventListener("click", startGame);
    choiceEl.addEventListener("click", answerQuestion);
    submitForm.addEventListener("submit", hiScore);
    // clear hi scores button (function to clear local storage)
    // play again button startGame()