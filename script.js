const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Dante Alighieri", "Jorge Luis Borges"],
        answer: "Miguel de Cervantes"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'O'?",
        options: ["Ouro", "Osmio", "Oxigênio", "Olíbano"],
        answer: "Oxigênio"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        const questionElement = document.createElement("div");
        questionElement.className = "question";

        const questionTitle = document.createElement("h2");
        questionTitle.innerText = questionData.question;
        questionElement.appendChild(questionTitle);

        questionData.options.forEach(option => {
            const optionLabel = document.createElement("label");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "answer";
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionElement.appendChild(optionLabel);
        });

        quizDiv.appendChild(questionElement);
    } else {
        showResult();
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}

function showResult() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
    document.getElementById("submit").style.display = "none";
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Limpa o resultado anterior
    const restartButton = document.createElement("button");
    restartButton.innerText = "Reiniciar";
    restartButton.onclick = restartQuiz;
    resultDiv.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("submit").style.display = "block";
    document.getElementById("result").innerHTML = "";
    loadQuestion();
}

window.onload = loadQuestion;
