var mensagem = {
    nome: "",
    email: "",
    mensagem: ""
}

function atualizarMensagem(){
let nomeInput = document.getElementById("nome");
    mensagem.nome = nomeInput.value;

let emailInput = document.getElementById("email");
    mensagem.email = emailInput.value;

let mensagemInput = document.getElementById("msg")
    mensagem.mensagem = mensagemInput.value;
}