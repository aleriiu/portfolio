'use strict';


const mainForm = document.querySelector('#form');
const nameInput = document.querySelector('#main-form_name');
const messageInput = document.querySelector('#main-form_text');
const phoneInput = document.querySelector('#main-form_phone');

mainForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = 'https://api.telegram.org/bot8002790723:AAGPPZxcNE0zz6459VGSluQyOAD2AcJaGgI/sendMessage';

  const text = `Сообщение из формы\r\n\r\nФИО: ${nameInput.value}\r\nТелефон: ${phoneInput.value}\r\nКомментарий: ${messageInput.value}`;

  const formData = new FormData();
  formData.append('chat_id', 5067249552);
  formData.append('parse_mode', 'Markdown');
  formData.append('text', text);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  nameInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';


  alert('Сообщение отправлено!');

})
