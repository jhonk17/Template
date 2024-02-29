function exibir() {
    const output = document.getElementById("saida");
    output.textContent = "";

    function addToSaida(text) {
        output.textContent += text + "\n";
    }

    function doPrint(label, value) {
        if (value) {
            addToSaida(label + ": " + value);
        }
    }

    const modelo = document.querySelector('input[name="modelo"]:checked');
    if (modelo) {
        addToSaida("Modalidade de trabalho", modelo.value);
    }

    const cnpj = document.getElementById("cpfCnpj").value;
    doPrint("CNPJ", cnpj.length === 11 ? "cpfCnpj" : null);

    doPrint("Nome");
    doPrint("Email");
    doPrint("Tel");
    doPrint("Hora");
    doPrint("Hostname");
    doPrint("Apolice");
    doPrint("Razao");

    const desc = document.getElementById("descricao").value.trim();
    if (desc) {
        addToOutput("Descrição do chamado", desc);
    }

    const trouble = document.getElementById("troubleshooting").value.trim();
    if (trouble) {
        addToOutput("Troubleshooting", trouble);
    }
}
