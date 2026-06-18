const questions = [
    {
        text: "Você recebeu um áudio de um professor cancelando a aula, mas o tom de voz está totalmente robótico e sem nenhuma pausa para respirar. É provável que seja real?",
        isTrue: false,
        feedback: "Correto! Vozes criadas por IA costumam falhar em pausas respiratórias naturais e entonações emocionais."
    },
    {
        text: "Vídeos manipulados por Inteligência Artificial (deepfakes) conseguem fazer qualquer pessoa parecer dizer coisas que ela nunca disse na vida.",
        isTrue: true,
        feedback: "Exato! Os algoritmos conseguem clonar vozes e expressões faciais com alta precisão, exigindo total atenção."
    },
    {
        text: "Uma imagem alarmante sobre a escola está viralizando. A melhor prática de cidadania é compartilhar nos grupos o quanto antes para avisar a todos.",
        isTrue: false,
        feedback: "Correto! O compartilhamento por impulso gera desinformação e pânico. Sempre valide os fatos em canais oficiais antes de repassar."
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionEl = document.getElementById("quiz-question");
    const feedbackEl = document.getElementById("quiz-feedback");
    
    feedbackEl.textContent = "";
    feedbackEl.className = ""; 
    
    questionEl.textContent = questions[currentQuestionIndex].text;
}

function checkAnswer(userAnswer) {
    const feedbackEl = document.getElementById("quiz-feedback");
    const currentQuestion = questions[currentQuestionIndex];
    
    if (userAnswer === currentQuestion.isTrue) {
        feedbackEl.textContent = "🎉 " + currentQuestion.feedback;
        feedbackEl.className = "feedback-success";
    } else {
        feedbackEl.textContent = "❌ Atenção! Esta alternativa está incorreta. Revise as diretrizes de segurança descritas acima.";
        feedbackEl.className = "feedback-error";
    }
    
    // Avança para o próximo cenário após ler o feedback
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }, 4500);
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();

    document.getElementById("btn-fato").addEventListener("click", () => checkAnswer(true));
    document.getElementById("btn-fake").addEventListener("click", () => checkAnswer(false));
});
