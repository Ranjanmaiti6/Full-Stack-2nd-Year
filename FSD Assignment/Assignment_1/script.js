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

function startQuiz(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    if(name == "" || roll == "" || section == ""){
        alert("Please Enter Valid Details");
        return;
    }
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    showQuestion();
}

function showQuestion(){
    let q = questions[questionNo];
    document.getElementById("questionNumber").innerText = "Question " + (questionNo + 1);
    document.getElementById("question").innerText = q.question;
    let options = "";
    q.options.forEach(function(option){
        options += "<button onclick=\"checkAnswer('" + option + "')\">" + option + "</button><br>";
    });
    document.getElementById("options").innerHTML = options;
}

function checkAnswer(answer){
    if(answer == questions[questionNo].answer){
        marks++;
    }
    nextQuestion();
}

function nextQuestion(){
    questionNo++;
    if(questionNo < questions.length){
        showQuestion();
    }else{
        submitQuiz();
    }
}

function submitQuiz(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
    document.getElementById("studentInfo").innerText =
        "Name: " + name + " | Roll No: " + roll + " | Section: " + section;
    document.getElementById("score").innerText =
        "Your Marks: " + marks + " / 5";
}