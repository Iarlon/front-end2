var objLoginSenha = {
    email: "",
    senha: ""
};
function functionLogin() {
    let emailInput = document.getElementById("email");
    let senhaInput = document.getElementById("password");

    objLoginSenha.email = emailInput.value;
    objLoginSenha.senha = senhaInput.value;
}

function loginUsuario() {
    functionLogin();

    const isValidUser = validarUsuario(objLoginSenha);

    if (isValidUser) {
        window.location.href = "mensagens.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}
