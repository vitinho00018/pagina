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
// 5. NOVA FUNCIONALIDADE: Animação das Imagens dos Estudantes (Fade-in ao aparecer)
// ===============================================

// Adiciona uma classe CSS inicial para esconder as imagens
const imagensEstudante = document.querySelectorAll('.estudante-imagem');

// Para que esta função funcione, você precisará adicionar um CSS simples.
// Veja o bloco de CSS necessário abaixo.

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% da imagem visível
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Se a imagem estiver na viewport
        if (entry.isIntersecting) {
            // Adiciona a classe que faz o fade-in
            entry.target.classList.add('fade-in-visible');
            // Para de observar, pois a animação já ocorreu
            observer.unobserve(entry.target);
        }
    });
};

const imageObserver = new IntersectionObserver(observerCallback, observerOptions);

imagensEstudante.forEach(imagem => {
    // 1. Adiciona a classe inicial 'fade-in-hidden' a todas as imagens
    imagem.classList.add('fade-in-hidden');
    // 2. Começa a observação
    imageObserver.observe(imagem);
});