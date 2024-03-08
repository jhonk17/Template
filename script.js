


botao = document.querySelector('#botao').addEventListener("click", () => {
    limparForumulario();
})

function limparForumulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const radial = form.querySelectorAll('input[type="radio"]')

    inputs.forEach(input => {
        input.value = "";
    });
    
    radial.forEach(input=> {
        input.value = ""
    })

    radial.forEach(radio => {
        radio.checked = false;
    })
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do formulário
    const login = document.getElementById('login');
    const nome = document.getElementById('nome');
    const cpfCnpj = document.getElementById('cpfCnpj');
    const telefone = document.getElementById('telefone');
    const hostnameIp = document.getElementById('hostnameIp');
    const filialMediador = document.getElementById('FilialMediador');
    const apolice = document.getElementById('apolice');
    const tipoSeguro = document.getElementsByName('tipo');
    const modeloSeguro = document.getElementsByName('modelo');
    const tipoCotacao = document.getElementsByName('cotacao');
    const descricao = document.querySelector('.descricao');
    const troubleshooting = document.querySelector('.troubleshooting');
    const saida = document.querySelector('.saida');

    // Adiciona event listeners para cada campo do formulário
    login.addEventListener('input', func2);
    nome.addEventListener('input', func2);
    cpfCnpj.addEventListener('input', func2);
    telefone.addEventListener('input', func2);
    hostnameIp.addEventListener('input', func2);
    filialMediador.addEventListener('input', func2);
    apolice.addEventListener('input', func2);
    tipoSeguro.forEach(radio => radio.addEventListener('change', func2));
    modeloSeguro.forEach(radio => radio.addEventListener('change', func2));
    tipoCotacao.forEach(radio => radio.addEventListener('change', func2));
    descricao.addEventListener('input', func2);
    troubleshooting.addEventListener('input', func2);

    /**
     * Atualiza o campo de saída com os dados do formulário.
     */
    function func2() {
        // Limpa o campo de saída
        saida.value = "";

        // Adiciona os dados do formulário ao campo de saída
        saida.value += "Login: " + login.value + "\n";
        saida.value += "Nome: " + nome.value + "\n";
        saida.value += "CPF/CNPJ: " + cpfCnpj.value + "\n";
        saida.value += "Telefone: " + telefone.value + "\n";
        saida.value += "Hostname/IP: " + hostnameIp.value + "\n";
        saida.value += "Filial/Mediador: " + filialMediador.value + "\n";
        saida.value += "Apólice/Cotação: " + apolice.value + "\n";

        // Adiciona o tipo de seguro selecionado ao campo de saída
        tipoSeguro.forEach(radio => {
            if (radio.checked) {
                saida.value += "Tipo de seguro: " + radio.value + "\n";
            }
        });

        // Adiciona o modelo de seguro selecionado ao campo de saída
        modeloSeguro.forEach(radio => {
            if (radio.checked) {
                saida.value += "Modelo de seguro: " + radio.value + "\n";
            }
        });

        // Adiciona o tipo de cotação selecionado ao campo de saída
        tipoCotacao.forEach(radio => {
            if (radio.checked) {
                saida.value += "Tipo de cotação: " + radio.value + "\n";
            }
        });

        // Adiciona a descrição e troubleshooting ao campo de saída
        saida.value += "Descrição: " + descricao.value + "\n";
        saida.value += "Troubleshooting: " + troubleshooting.value;
    }
});





