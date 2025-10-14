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
// 5. NOVO COMANDO: Validação e Alerta de Estudantes (Executa ao carregar a página)
// Verifica se o número total de alunos atende a um requisito mínimo e, se não, 
// aplica uma classe de alerta nos cards.
// ===============================================

const todosEstudantesDivs = document.querySelectorAll('.estudante-div');
const minimoEsperado = 15; // Defina um mínimo (seus alunos são 12. Mude para 5 para testar o alerta).
const totalEstudantes = todosEstudantesDivs.length;

if (totalEstudantes < minimoEsperado) {
    console.warn(`[ALERTA JS] O número de alunos em destaque (${totalEstudantes}) é menor que o mínimo esperado (${minimoEsperado}).`);
    
    // Aplica a classe de alerta em todos os cards
    todosEstudantesDivs.forEach(div => {
        div.classList.add('alerta-div-estudante');
    });

    // Opcional: Adiciona um texto de alerta visual
    const tituloSecao = document.querySelector('.estudante_titulo');
    if (tituloSecao) {
        tituloSecao.textContent += ' (REVISAR LISTA: INCOMPLETA!)';
    }
} else {
    console.log(`[JS INFO] Número de alunos em destaque (${totalEstudantes}) OK.`);
}