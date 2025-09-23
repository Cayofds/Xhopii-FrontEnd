document.getElementById("form-log").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio padrão
    const nome = document.getElementById("nome").value;
    // Redireciona para outra página com o valor como parâmetro
    window.location.href = `resultado.html?nome=${encodeURIComponent(nome)}`;
});