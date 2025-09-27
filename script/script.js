document.getElementById("form-log").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio padrão
    const nome = document.getElementById("nome").value;
    // Redireciona para outra página com o valor como parâmetro
    window.location.href = `resultado.html?nome=${encodeURIComponent(nome)}`;
});

function selecionarImgProduto(imgMiniaturaEscolhida) {
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function selecionarImgProduto(imgMiniaturaEscolhida) {
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido) {
    const cor = botaoEscolhido.innerText;

    if (cor === "Preto") {
        document.getElementById("precoProduto").innerText = "R$ 56,90";
        document.getElementById("imgPrincipal").src = "../img/produto1.png";
        document.getElementById("qtdDisponivel").innerText = "171 peças disponíveis";
    } 
    else if (cor === "Azul") {
        document.getElementById("precoProduto").innerText = "R$ 60,90";
        document.getElementById("imgPrincipal").src = "../img/produto2.png";
        document.getElementById("qtdDisponivel").innerText = "120 peças disponíveis";
    } 
    else if (cor === "Verde") {
        document.getElementById("precoProduto").innerText = "R$ 58,90";
        document.getElementById("imgPrincipal").src = "../img/produto3.png";
        document.getElementById("qtdDisponivel").innerText = "98 peças disponíveis";
    } 
    else if (cor === "Cinza") {
        document.getElementById("precoProduto").innerText = "R$ 55,90";
        document.getElementById("imgPrincipal").src = "../img/produto4.png";
        document.getElementById("qtdDisponivel").innerText = "75 peças disponíveis";
    } 
    else if (cor === "Rosa") {
        document.getElementById("precoProduto").innerText = "R$ 62,90";
        document.getElementById("imgPrincipal").src = "../img/produto5.png";
        document.getElementById("qtdDisponivel").innerText = "53 peças disponíveis";
    }
}

// 👉 Função para mudar o tamanho
function mudarTamanho(botaoEscolhido) {
    const tamanho = botaoEscolhido.innerText;
    document.getElementById("tamanhoSelecionado").innerText =
        "Tamanho Selecionado: " + tamanho;
}