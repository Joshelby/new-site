const nextButton = document.getElementById("next-button")
const backButton = document.getElementById("back-button")
const questionFrame = document.getElementById("question-frame")
const questionBox = document.getElementById("question-box")
const questionNavButtons = document.getElementById("question-nav-buttons")
const answerBox = document.getElementById("answer-box")
const answerField = document.getElementById("answer-field")

let currentQuestionNumber = 0

const createAnswerBox  = () => {
    answerBox.style.display = "block"
}

const updateAnswerBox = (type = "freeform") => {
    if (type === "freeform") {
        answerBox.innerHTML = `<form id='answer-form' autocomplete='off'>
        <input type='text' id='answer-field' maxlength='20'>
    </form>`
    }
}

const updateQuestionBox = () => {
    questionBox.innerHTML = `<p>${(currentQuestionNumber + 1)}. ${quiz1._questions[currentQuestionNumber]._questionText}</p>`
}

const loadQuestion = () => {
    updateAnswerBox()
    updateQuestionBox()
}

const nextQuestion = () => {
    currentQuestionNumber++
    updateAnswerBox()
    updateQuestionBox()
}

const start = () => {
    loadQuestion()
    createAnswerBox()
    questionNavButtons.style.justifyContent = "space-between"
    backButton.style.display = "flex"
    nextButton.firstElementChild.innerHTML = "Next"
    nextButton.onclick = loadQuestion
}

const initialLoad = () => {
    questionBox.innerHTML = "<p>Welcome to League of Trivia!</p>"
}

nextButton.onclick = start

initialLoad()