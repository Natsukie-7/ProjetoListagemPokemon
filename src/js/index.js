const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("dark-mode");
    body.classList.toggle('dark-mode');

    if (modoEscuroAtivo) {
        body.classList.remove("dark-mode");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        body.classList.add("dark-mode");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});