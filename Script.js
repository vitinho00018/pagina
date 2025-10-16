// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const usernameInput = document.getElementById('username'); // Seleciona o campo de usuário
const passwordInput = document.getElementById('password'); // Seleciona o campo de senha


// --- Função de Saudação (Modificada para ser chamada após o login) ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        // Assegura que o nome de usuário começa com letra maiúscula (melhor UX)
        const usernameCapitalized = username.charAt(0).toUpperCase() + username.slice(1);
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${usernameCapitalized}!`;
    }
}


// --- Lógica Principal de Login ---
// Verifica se todos os elementos cruciais estão presentes antes de adicionar o listener
if (loginForm && loginScreen && mainContent && usernameInput && passwordInput) {
    
    // Adiciona o ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede que o formulário recarregue a página
        
        // Pega os valores dos campos
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // **Credenciais de Teste:**
        const USER_CORRETO = "up29";
        const SENHA_CORRETA = "0405";
        
        // Simulação de verificação
        if (username === USER_CORRETO && password === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            
            // 1. Esconde a tela de login
            loginScreen.style.display = 'none';
            
            // 2. Mostra o conteúdo principal
            mainContent.classList.remove('hidden-content');
            
            // 3. Executa a saudação personalizada no título da página
            saudarVisitante(username);
            
        } else {
            // Login Falhou
            loginMessage.textContent = "Usuário ou senha incorreto.";
            // (Opcional) Limpa os campos para nova tentativa
            passwordInput.value = '';
        }
    });
    
    // MELHORIA: Adiciona listeners para limpar a mensagem de erro ao focar
    usernameInput.addEventListener('focus', () => {
        loginMessage.textContent = '';
    });
    passwordInput.addEventListener('focus', () => {
        loginMessage.textContent = '';
    });
    
} else {
    // Caso algum ID esteja faltando no HTML (para segurança)
    console.error("Erro: Um ou mais IDs de login ou conteúdo principal (incluindo inputs) não foram encontrados. Verifique seu HTML.");
}