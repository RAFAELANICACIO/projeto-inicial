var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("Telefone");

var cep = document.getElementById("CEP");

var logradouro = document.getElementById("logradouro");

var número = document.getElementById("número");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");

function alertar(){
    //alert(nome.value + " " + "clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value; 
            "\n  E-mail: " + " " + ElementInternals.value;

            "\n  Telefone: " + " " + ElementInternals.value;

            "\n  CEP: " + " " + ElementInternals.value;
           
            "\n  Logradouro: " + " " + ElementInternals.value;

            "\n  Número: " + " " + ElementInternals.value;

            "\n  Complemento: " + " " + ElementInternals.value;

            "\n  Bairro: " + " " + ElementInternals.value;

            "\n  Cidade: " + " " + ElementInternals.value;

            "\n  Estado: " + " " + ElementInternals.value;
}



