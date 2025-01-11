document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as imagens dentro do carrossel
    let imagensCarrossel = document.querySelectorAll('#meuCarrossel .imgCarrosel');
    console.log(imagensCarrossel); // Verifica se as imagens do carrossel foram corretamente selecionadas

    // Adicionando o evento de clique para as imagens do carrossel
    imagensCarrossel.forEach((img, index) => {  // Adiciona o "index" aqui
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log("Imagem do carrossel clicada:", img);

            // Verificando o índice para redirecionar para a página certa
            if(index === 0) {
                window.location.href = '../projeto-android/index.html';
            } else if(index === 1) {
                window.location.href = '../projeto-cordel/index.html';
            } else if(index === 2) {
                window.location.href = '../projetoTarefa/index.html';
            } else if(index === 3) {
                window.location.href = '../projeto-login/index.html';
            } else {
                window.location.href = '../projeto-trivia/trivia/index.html';
            }
        });
    });
});
