function selectById() {
    const titulo = document.getElementById("titulo");
    console.log(titulo);
}

function selectByClass() {
    const elementos = document.getElementsByClassName("paragrafo");
    console.log(elementos);
}

function selectByTag() {
    const elementos = document.getElementsByTagName("p");
    console.log(elementos);
}

// Executando as funções
selectById();
selectByClass();
selectByTag();