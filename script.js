var botao = document.getElementsById("botao")
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

function alertar(){
    alert(nome.value + " " + "clicou no botão!!!");
}

