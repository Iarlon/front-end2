function preencherTabelaMensagens() {
    const mensagens = obterMensagens();

    if (mensagens.length === 0) {
        alert("Erro ao carregar mensagens ou nenhuma mensagem encontrada.");
        return;
    }

    const tabelaCorpo = document.getElementById("mensagensTableBody");
    tabelaCorpo.innerHTML = "";

    mensagens.forEach(mensagem => {
        const linha = document.createElement("tr");

        const colunaId = document.createElement("td");
        colunaId.textContent = mensagem.id;

        const colunaNome = document.createElement("td");
        colunaNome.textContent = mensagem.nome;

        const colunaEmail = document.createElement("td");
        colunaEmail.textContent = mensagem.email;

        const colunaMensagem = document.createElement("td");
        colunaMensagem.textContent = mensagem.mensagem;

        linha.appendChild(colunaId);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        linha.appendChild(colunaMensagem);

        tabelaCorpo.appendChild(linha);
    });

    alert("Mensagens carregadas com sucesso!");
}
