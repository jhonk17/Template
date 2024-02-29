// Seleciona os campos do formulário e a textarea de saída
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');
const outputTextarea = document.getElementById('output');

// Adiciona listeners de evento aos campos do formulário
nameInput.addEventListener('input', updateOutput);
emailInput.addEventListener('input', updateOutput);
messageTextarea.addEventListener('input', updateOutput);

// Função para atualizar a textarea de saída
function updateOutput() {
  // Obtém os valores dos campos do formulário
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageTextarea.value;
  
  // Monta o texto com os valores dos campos
  const outputText = `Nome: ${nameValue}\nEmail: ${emailValue}\nMensagem: ${messageValue}`;
  
  // Exibe o texto na textarea de saída
  outputTextarea.value = outputText;
}
e