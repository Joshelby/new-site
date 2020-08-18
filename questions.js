class Question {
    constructor(questionText, answers, correctAnswer) {
        this._questionText = questionText
        this._answers = answers
        this._correctAnswer = correctAnswer
        this._userAnswer
    }

    set userAnswer(answer) {
        if (answer = string) {
            this._userAnswer = answer.toLowerCase()
        }
    }

    checkAnswer() {
        return (this._userAnswer === this.answers[correctAnswer])
    }
}

class Quiz {
    constructor() {
        this._questions = []
    }

    addQuestion(questionText, answers, correctAnswer) {
        this._questions.push(new Question(questionText, answers, correctAnswer))
    }
}

let test = "hello"

const quiz1 = new Quiz()
quiz1.addQuestion("What is the name of Yasuo's brother?", ["steve", "yone", "dave", "ben"], 1)
quiz1.addQuestion("How much gold does B.F. Sword cost?", ["1300", "1200", "1500", "1600"], 0)