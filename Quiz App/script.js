// STEP-1

const questions =[ 
    {
        question: "which is largest animal in the world?",
        answer: [
            { text:"Shark" , correct:false},
            { text:"Blue whale" , correct:true},
            { text:"Elephant" , correct:false},
            { text:"Girafe" , correct:false}
        ]
    },
    {
        question: "which is largest desert in the world?",
        answer: [
            { text:"Kalahari" , correct:false},
            { text:"Gobi" , correct:false},
            { text:"Sahara" , correct:false},
            { text:"Antarctica" , correct:true}
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answer: [
            { text:"Asia" , correct:false},
            { text:"Australia" , correct:true},
            { text:"Africa" , correct:false},
            { text:"Arctic" , correct:false}
        ]
    },
    {
        question: "which is smalest country in the world?",
        answer: [
            { text:"Vaticaana city" , correct:true},
            { text:"Bhutan" , correct:false},
            { text:"Nepal" , correct:false},
            { text:"SHri lanka" , correct:false}
        ]
    }

];
// STEP -2

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

// STEP-3

let currentQuestionIndex = 0;
let score = 0;

function stratQuiz(){
    currentQuestionIndex =0;
    score= 0;
    nextButton.innerHTML =" Next";
    showQuestion();
}

// step-4

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);

            // step-7

            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click" , selectAnswer)

        
    });
}
// STEP-5

stratQuiz()
// STEP-6
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// STEP-7
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    // step-8

    Array.from(answerButtons.children).forEach( (button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

// step-9

nextButton.addEventListener("click" ,()=>{
   if(currentQuestionIndex < questions.length) {
    handleNextButton();
   }
   else{
    stratQuiz();
   }
})

// step-10

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
// step-11
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="play again";
    nextButton.style.display = "block"
}