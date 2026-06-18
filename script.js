// Banco de dados interno usando objetos e arrays nativos
const questions = [
    {
        text: "Você recebeu um áudio de um professor cancelando a aula, mas o tom de voz está perfeitamente robótico e sem pausas naturais. É provável que seja real?",
        isTrue: false,
        feedback: "Correto! Vozes geradas por IA costumam falhar em pausas respiratórias, entonações emocionais e ritmos naturais."
    },
    {
        text: "Vídeos manipulados (deepfakes) podem fazer qualquer pessoa famosa ou comum parecer dizer coisas que ela nunca disse.",
        isTrue: true,
        feedback: "Exato! A tecnologia de IA consegue mapear rostos e clonar vozes com precisão assustadora, exigindo nossa atenção redobrada."
    },
    {
        text: "Uma imagem chocante sobre a escola está viralizando. O melhor comportamento de cidadania digital é repassar imediatamente para alertar os outros.",
        isTrue: false,
        feedback: "Correto! O compartilhamento impulsivo espalha pânico. Sempre verifique a veracidade em fontes confiáveis antes de repassar."
    }
];

// Gerenciamento de estado da aplicação
let currentQuestionIndex = 0;

/**
 * Carrega a pergunta atual na tela limpando estados anteriores
 */
function loadQuestion() {
    const questionEl = document.getElementById("quiz-question");
    const feedbackEl = document.getElementById("quiz-feedback");
    
    // Reseta o container de feedback de forma limpa
    feedbackEl.textContent = "";
    feedbackEl.style.backgroundColor = "transparent";
    feedbackEl.style.border = "none";
    
    // Insere o texto da pergunta atual no elemento semanticamente correto
    questionEl.textContent = questions[currentQuestionIndex].text;
}

/**
 * Valida a resposta dada pelo usuário
 * @param {boolean} userAnswer - Resposta selecionada pelo aluno (true para Fato, false para Fake)
 */
function checkAnswer(userAnswer) {
    const feedbackEl = document.getElementById("quiz-feedback");
    const currentQuestion = questions[currentQuestionIndex];
    
    if (userAnswer === currentQuestion.isTrue) {
        feedbackEl.textContent = "🎉 " + currentQuestion.feedback;
        feedbackEl.style.backgroundColor = "#d1fae5"; // Verde claro
        feedbackEl.style.color = "#065f46";            // Verde escuro
        feedbackEl.style.border = "1px solid #a7f3d0";
    } else {
        feedbackEl.textContent = "❌ Atenção! Esta alternativa está incorreta. Revise as boas práticas de análise de mídias.";
        feedbackEl.style.backgroundColor = "#fee2e2"; // Vermelho claro
        feedbackEl.style.color = "#991b1b";            // Vermelho escuro
        feedbackEl.style.border = "1px solid #fecaca";
    }
    
    // Aguarda 4 segundos para que o aluno leia o feedback e troca de pergunta de forma cíclica
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }, 4000);
}

// Dispara o carregamento do quiz assim que a árvore DOM estiver totalmente pronta
document.addEventListener("DOMContentLoaded", loadQuestion);
