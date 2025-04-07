function saudarTratado():void {
    const input = document.getElementById("nome");
    if(input && input instanceof HTMLInputElement) {
        const nome = input.value;
        const saudacao = document.getElementById("saudacao");
        if(saudacao) {
            saudacao.innerHTML = `Olá, ${nome}!`;
        }
        else {
            console.error("Elemento 'saudacao' não encontrado.");
        }
    }
}