function adicionarCurso() {
    // Coletando dados do formulário
    let nomeCurso = document.getElementById("nomeCurso").value;
    let nivelCurso = document.getElementById("nivelCurso").value;
    let instituicao = document.getElementById("instituicao").value;
    let anoInicio = document.getElementById("anoInicio").value;
    let anoTermino = document.getElementById("anoTermino").value;
    let situacao = document.getElementById("situacao").value;
    let valor = document.getElementById("valor").value;

    // Validando se todos os campos estão preenchidos
    if (!nomeCurso || !nivelCurso || !instituicao || !anoInicio || !situacao || !valor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Construindo a linha da tabela
    let tabela = document.getElementById("tabelaCursos");
    let newRow = tabela.insertRow();
    newRow.innerHTML = `
        <td>${nomeCurso}</td>
        <td>${nivelCurso}</td>
        <td>${instituicao}</td>
        <td>${anoInicio}</td>
        <td>${anoTermino}</td>
        <td>${situacao}</td>
        <td>${valor}</td>
        <td><button onclick="removerCurso(this)">Remover</button></td>
    `;

    // Limpar campos do formulário após adicionar o curso
    document.getElementById("nomeCurso").value = "";
    document.getElementById("nivelCurso").value = "";
    document.getElementById("instituicao").value = "";
    document.getElementById("anoInicio").value = "";
    document.getElementById("anoTermino").value = "";
    document.getElementById("situacao").value = "";
    document.getElementById("valor").value = "";
}

function removerCurso(button) {
    // Encontrar a linha pai do botão e removê-la
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
