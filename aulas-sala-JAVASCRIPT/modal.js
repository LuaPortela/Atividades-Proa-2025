function abrir_modal() {
    let modal = document.getElementById("modal");
    let janela_escura = document.getElementById("janela_escura");

    modal.style.visibility = "visible"; // Torna o modal visível
    janela_escura.style.visibility = "visible"; // Torna a janela escura visível
}

function fechar_modal() {
    let modal = document.getElementById("modal");
    let janela_escura = document.getElementById("janela_escura");

    modal.style.visibility = "hidden"; // Torna o modal invisível
    janela_escura.style.visibility = "hidden"; // Torna a janela escura invisível
}