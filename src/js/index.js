// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 -  dar um jeito de identifficr o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verifficar se o body já tem o modo-escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");   
    
    if(modoEscuroAtivo){

    // passo 7 remover a classe do modo-escuro do body
    //Removido pelo Toggle o "body.classList.remove("modo-escuro");"
    
    // passo 8 - trocar a imagem do botão de tema pro sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
   
} else{

    // passo 4 - adicionar a classe modo-escuro no body
    //Removido pelo Toggle o "body.classList.add("modo-escuro");"

    // passo 5 - trocar a imagem do botão de tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});


