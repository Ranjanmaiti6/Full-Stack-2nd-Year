const questions = [
    {
        question: "What is my favorite thing to do in free time?",
        options: ["Coding", "Sleeping", "Gaming", "Travelling"],
        answer: "Coding"
    },
    {
        question: "Which time do I usually like to wake up?",
        options: ["5 AM", "8 AM", "10 AM", "12 PM"],
        answer: "8 AM"
    },
    {
        question: "Which programming language do I use a lot?",
        options: ["C++", "Java", "Ruby", "Swift"],
        answer: "C++"
    },
    {
        question: "What do I enjoy solving?",
        options: ["LeetCode", "Crosswords", "Codeforces", "Puzzles"],
        answer: "LeetCode"
    },
    {
        question: "What kind of project do I like building?",
        options: ["Web Projects", "Cooking Apps", "Music Albums", "Games"],
        answer: "Web Projects"
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
function showQuestion(){
    let q=questions[questionNo];
    document.getElementById("questionNumber").innerText="Question "+(questionNo+1);
    document.getElementById("question").innerText=q.question;
    document.getElementById("options").innerHTML="";

    q.options.forEach(function(option){
        let button=document.createElement("button");
        button.innerText=option;
        button.onclick=function(){
            selectAnswer(option,button);
        };
        document.getElementById("options").appendChild(button);
        document.getElementById("options").appendChild(document.createElement("br"));
    });

    selectedAnswer=null;
}

function selectAnswer(answer,button){
    selectedAnswer=answer;

    let buttons=document.querySelectorAll("#options button");
    buttons.forEach(function(btn){
        btn.style.backgroundColor="";
        btn.style.color="";
    });
    button.style.backgroundColor="green";
    button.style.color="white";
}

function nextQuestion(){
    if(selectedAnswer==null){
        alert("Please select an answer");
        return;
    }
    if(selectedAnswer==questions[questionNo].answer){
        marks++;
    }
    questionNo++;
    if(questionNo<questions.length){
        showQuestion();
    }else{
        submitQuiz();
    }
}

function submitQuiz(){
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let section=document.getElementById("section").value;

    document.getElementById("quizPage").style.display="none";
    document.getElementById("resultPage").style.display="block";

    document.getElementById("studentInfo").innerText="Name: "+name+" | Roll No: "+roll+" | Section: "+section;
    document.getElementById("score").innerText="Your Marks: "+marks+" / "+questions.length;
}