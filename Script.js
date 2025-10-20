// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const usernameInput = document.getElementById('username'); // Seleciona o campo de usuário
const passwordInput = document.getElementById('password'); // Seleciona o campo de senha


// --- Função de Saudação ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        // Formata o username: primeira letra maiúscula, o resto minúsculo (Melhor UX).
        const trimmedUsername = username.trim(); 
        const usernameCapitalized = trimmedUsername.charAt(0).toUpperCase() + trimmedUsername.slice(1).toLowerCase();
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${usernameCapitalized}!`;
    }
}


// --- Lógica Principal de Login ---
// Define as credenciais de teste (username em minúsculo para comparação insensível à caixa)
const USER_CORRETO_LOWER = "up29";
const SENHA_CORRETA = "0405";

// Verifica se todos os elementos cruciais estão presentes antes de adicionar o listener
if (loginForm && loginScreen && mainContent && usernameInput && passwordInput && loginMessage) {
    
    // Adiciona o ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        // ESTA É A LINHA CRÍTICA PARA EVITAR O RECARREGAMENTO DA PÁGINA
        event.preventDefault(); 
        
        // Pega os valores dos campos e remove espaços extras
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Converte o username digitado para minúsculo antes de comparar (Case-Insensitive)
        const usernameParaComparacao = username.toLowerCase();
        
        // Simulação de verificação de credenciais
        if (usernameParaComparacao === USER_CORRETO_LOWER && password === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            
            // 1. Esconde a tela de login
            loginScreen.style.display = 'none';
            
            // 2. Mostra o conteúdo principal (assumindo que 'hidden-content' usa display: none;)
            mainContent.classList.remove('hidden-content');
            
            // 3. Executa a saudação personalizada
            saudarVisitante(username);
            
        } else {
            // Login Falhou
            loginMessage.textContent = "Usuário ou senha incorreto.";
            // Limpa o campo de senha
            passwordInput.value = '';
        }
    });
    
    // Adiciona listeners para limpar a mensagem de erro ao focar (Melhoria de UX)
    usernameInput.addEventListener('focus', () => {
        loginMessage.textContent = '';
    });
    passwordInput.addEventListener('focus', () => {
        loginMessage.textContent = '';
    });
    
} else {
    // Exibe um erro no console se algum ID essencial estiver faltando no HTML
    console.error("Erro: Um ou mais IDs de login ou conteúdo principal (incluindo inputs) não foram encontrados. Verifique seu HTML.");
}