const questions = [
    {
        question: "What is HTML?",
        options: ["Language", "Browser", "Computer", "Game"],
        answer: "Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling", "Gaming", "Typing", "Calling"],
        answer: "Styling"
    },
    {
        question: "What is JavaScript?",
        options: ["Language", "Browser", "Website", "Computer"],
        answer: "Language"
    },
    {
        question: "Which tag is used for heading?",
        options: ["<h1>", "<p>", "<br>", "<img>"],
        answer: "<h1>"
    },
    {
        question: "Which tag is used for paragraph?",
        options: ["<p>", "<h1>", "<br>", "<div>"],
        answer: "<p>"
    }
];

let questionNo = 0;
let marks = 0;
let selectedAnswer = null;

function startQuiz() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let section = document.getElementById("section").value.trim();

    if (name === "" || roll === "" || section === "") {
        alert("Please Enter Valid Details");
        return;
    }

    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    showQuestion();
}

function showQuestion() {
    let q = questions[questionNo];

    document.getElementById("questionNumber").innerText =
        "Question " + (questionNo + 1);

    document.getElementById("question").innerText =
        q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    selectedAnswer = null;
    q.options.forEach(function(option) {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = function() {
            selectAnswer(option, button);
        };
        optionsDiv.appendChild(button);
        optionsDiv.appendChild(document.createElement("br"));
    });
}
function selectAnswer(answer, button) {
    selectedAnswer = answer;
    let buttons = document.querySelectorAll("#options button");

    buttons.forEach(function(btn) {
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });

    button.style.backgroundColor = "green";
    button.style.color = "white";
}

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer first.");
        return;
    }
    if (selectedAnswer === questions[questionNo].answer) {
        marks++;
    }

    questionNo++;

    if (questionNo < questions.length) {
        showQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    if (selectedAnswer !== null && questionNo < questions.length) {
        if (selectedAnswer === questions[questionNo].answer) {
            marks++;
        }
    }
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
    document.getElementById("studentInfo").innerText =
        "Name: " + name +
        " | Roll No: " + roll +
        " | Section: " + section;
    document.getElementById("score").innerText =
        "Your Marks: " + marks + " / " + questions.length;
}