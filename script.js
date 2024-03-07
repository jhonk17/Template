
const botao = document.querySelector('#botao')
let form = document.querySelector('form')
let formulario = document.querySelectorAll('input')

formulario.addEventListener('keyup')


botao.addEventListener("click", () => {
    limparForumulario();
})

function limparForumulario() {

    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = "";
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    })
}

function imprimirFormulario() {
    // Obtém o valor do elemento de modelo selecionado
    var modelo = document.querySelector('input[name="modelo"]:checked')?.value;

    // Limpa o conteúdo do elemento de saída
    var saida = document.getElementById("output");
    saida.textContent = "";

    // Array contendo os nomes dos campos
    var campos = ["BE", "Nome", "cnpj", "email", "tel", "hora", "hostname", "apolice", "razao", "title"];

    // Itera sobre cada campo e chama a função doPrint com o índice e o nome do campo
    campos.forEach(campo => doPrint(campos.indexOf(campo), campo));

    // Adiciona o valor do modelo ao elemento de saída, se estiver definido
    if (modelo) {
        saida.textContent += "Modalidade de trabalho: " + modelo + "\n";
    }

    // Obtém os valores dos campos de mensagem e descrição
    var trouble = document.getElementById("msg").value;
    var desc = document.getElementById("desc").value;

    // Adiciona a descrição do chamado ao elemento de saída, se estiver definida e o output estiver vazio
    if (!saida.textContent) {
        output.textContent += "Descrição do chamado: \n\n" + desc;
    }
    // Adiciona a descrição do chamado ao elemento de saída, se estiver definida
    else if (desc) {
        saida.textContent += "\n\nDescrição do chamado: \n\n" + desc;
    }

    // Adiciona a mensagem de troubleshooting ao elemento de saída, se estiver definida e o output estiver vazio
    if (!saida.textContent) {
        saida.textContent += "Troubleshooting: \n\n" + trouble;
    }
    // Adiciona a mensagem de troubleshooting ao elemento de saída, se estiver definida
    else if (trouble) {
        saida.textContent += "\n\nTroubleshooting: \n\n" + trouble;
    }
}
