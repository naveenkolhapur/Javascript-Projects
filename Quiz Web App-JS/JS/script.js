const quiz =[
    {
        question :"Q1. HTML is ?",
        a: "Programming Language",
        b: "Markup Language",
        c: "Scripting Language",
        d: "None of the Above",
        ans :"ans2"
    },
    {
        question :"Q2. Inside which HTML element do we put the Javascript?",
        a: "script",
        b: "js",
        c: "javascript",
        d: "Scripting",
        ans :"ans1"
    },
    {
        question :"Q3. How to write an IF statement in Javascript?",
        a: "if(i==5)",
        b: "if i==5 then",
        c: "if i=5",
        d: "if i=5 then",
        ans :"ans1"
    },
    {
        question :"Q4. How do you round the number 7.25, to the nearest integer?",
        a: "Math.rnd(7.25)",
        b: "round(7.25)",
        c: "rnd(7.25)",
        d: "Math.round(7.25)",
        ans :"ans4"
    },
    {
        question :"Q5. How can you detect the client's browser name?",
        a: "browser.name",
        b: "client.navName",
        c: "navigator.appName",
        d: "None of the Above",
        ans :"ans3"
    }
];

const questions = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const Showscore = document.querySelector("#Showscore")

var questionCount = 0;
var score = 0;

//loading Questions
function loadquestion(){
    var questionList = quiz[questionCount];

    questions.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadquestion();

//getChecked Answer
function getCheckedAnswer(){
    var answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        } 
    });
    return answer;
};

//deselect Checked Answer
function deselect(){
    answers.forEach((curAnsElem)=>curAnsElem.checked = false);
}

//click Event
submit.addEventListener('click', () => {
    var checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quiz[questionCount].ans)
    {
        score++;
    };

    questionCount++;

    deselect();

    if(questionCount<quiz.length){
        loadquestion();
    }
    else
    {
        
        Showscore.innerHTML = `
        <h3> You Have Scored :  ${score}/${quiz.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        
        Showscore.classList.remove('score-area');
        
    }
});