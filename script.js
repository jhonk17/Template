
botao.addEventListener("click", function(){
    limparForumulario();
})

function limparForumulario() {
    document.querySelector('#login').value = "";
    document.querySelector('#nome').value = "";
    document.querySelector('#cpfCnpj').value = "";
    document.querySelector('#telefone').value = "";
    document.querySelector('#hostnameIp').value = "";
    document.querySelector('#FilialMediador').value = "";
    document.querySelector('#apolice').value = "";
}