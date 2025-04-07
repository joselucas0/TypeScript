function saudarTratado() {
    var input = document.getElementById("nome");
    var saudacao = document.getElementById("saudacao");

    if (input && input instanceof HTMLInputElement) {
        var nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, digite seu nome.");
        } else {
            alert(`Olá ${nome}, tudo bem?`)
        }

    } else {
        alert('Não encontrado o id nome')
    }
}