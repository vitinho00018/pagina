// ===============================================
// script.js - Funções de Interatividade da Página
// ===============================================

// 1. Confirmação de Carregamento
// Este comando é a primeira coisa que deve ser executada para garantir que o arquivo JS está lendo.
console.log("script.js carregado com sucesso! A página está pronta para interatividade.");

// 2. Função de Destaque no Título do Site
// Adiciona um efeito simples ao passar o mouse sobre o título do site no cabeçalho.
const tituloSite = document.querySelector('.titulo_site');

if (tituloSite) {
    tituloSite.addEventListener('mouseover', () => {
        // Altera o cursor para indicar que é interativo
        tituloSite.style.cursor = 'pointer';
        // Simplesmente registra a ação no console. Não altera o CSS (modelo) permanentemente.
        console.log("Mouse sobre o Título: Nossa Escola");
    });

    tituloSite.addEventListener('click', () => {
        alert("Bem-vindo(a) à Nossa Escola!");
    });
}


// 3. Interatividade nos Ícones de Estudantes (Social Media)
// Esta função adiciona um pequeno log no console ao clicar nos ícones sociais de cada aluno.
const iconesEstudante = document.querySelectorAll('.estudante-icone');

iconesEstudante.forEach(icone => {
    icone.addEventListener('click', (evento) => {
        // Encontra o nome do aluno pai deste ícone
        const estudanteDiv = icone.closest('.estudante-div');
        const nomeAluno = estudanteDiv ? estudanteDiv.querySelector('.estudante-nome').textContent : 'Aluno Desconhecido';
        
        // Encontra o tipo de ícone clicado (Whatsapp, Instagram, Facebook)
        const altTexto = icone.getAttribute('alt');

        console.log(`Ícone clicado: "${altTexto}" para o(a) ${nomeAluno}.`);
    });
});


// 4. Efeito no Rodapé
// Função que apenas registra no console quando o usuário passa o mouse sobre a área de contato.
const linkContato = document.querySelector('.escola-título .link');

if (linkContato) {
    linkContato.addEventListener('mouseenter', () => {
        console.log("Usuário visualizando o número de contato do WhatsApp.");
    });
}

// ===============================================
// 5. NOVA FUNCIONALIDADE: Efeito de Foco no Card do Aluno
// Adiciona/remove uma classe CSS ao passar o mouse para dar destaque visual.
// ===============================================

const cardsEstudante = document.querySelectorAll('.estudante-div');

cardsEstudante.forEach(card => {
    // Adiciona a classe 'estudante-focado' quando o mouse entra
    card.addEventListener('mouseenter', () => {
        card.classList.add('estudante-focado');
        console.log(`Foco no card do aluno: ${card.querySelector('.estudante-nome').textContent}`);
    });

    // Remove a classe 'estudante-focado' quando o mouse sai
    card.addEventListener('mouseleave', () => {
        card.classList.remove('estudante-focado');
    });
});