// ===============================================
// script.js - Funções de Interatividade da Página
// ===============================================

// 1. Confirmação de Carregamento
console.log("script.js carregado com sucesso! A página está pronta para interatividade.");

// 2. Função de Destaque no Título do Site
const tituloSite = document.querySelector('.titulo_site');
if (tituloSite) {
    tituloSite.addEventListener('mouseover', () => {
        tituloSite.style.cursor = 'pointer';
        console.log("Mouse sobre o Título: Nossa Escola");
    });

    tituloSite.addEventListener('click', () => {
        alert("Bem-vindo(a) à Nossa Escola!");
    });
}

// 3. Interatividade nos Ícones de Estudantes (Social Media)
const iconesEstudante = document.querySelectorAll('.estudante-icone');
iconesEstudante.forEach(icone => {
    icone.addEventListener('click', () => {
        const estudanteDiv = icone.closest('.estudante-div');
        const nomeAluno = estudanteDiv ? estudanteDiv.querySelector('.estudante-nome').textContent : 'Aluno Desconhecido';
        const altTexto = icone.getAttribute('alt');
        console.log(`Ícone clicado: "${altTexto}" para o(a) ${nomeAluno}.`);
    });
});

// 4. Efeito no Rodapé
const linkContato = document.querySelector('.escola-título .link');
if (linkContato) {
    linkContato.addEventListener('mouseenter', () => {
        console.log("Usuário visualizando o número de contato do WhatsApp.");
    });
}