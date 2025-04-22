'use strict';


const mainForm = document.querySelector('#form');
const nameInput = document.querySelector('#main-form_name');
const messageInput = document.querySelector('#main-form_text');
const phoneInput = document.querySelector('#main-form_phone');

mainForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = 'https://api.telegram.org/bot8002790723:AAGPPZxcNE0zz6459VGSluQyOAD2AcJaGgI';

  const text = `Сообщение из формы\r\n\r\nФИО: ${nameInput.value}\r\nТелефон: ${phoneInput.value}\r\nКомментарий: ${messageInput.value}`;

  await sendTextMessage(text);

  nameInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';


  alert('Сообщение отправлено!');

})


async function sendTextMessage(text) {
  const formData = new FormData();
  formData.append('chat_id', 5067249552);
  formData.append('parse_mode', 'Markdown');
  formData.append('text', text);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });
}


// const form = document.querySelector('#form');

// console.log(form);

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const nameInput = form.querySelector('#main-form_name');
//   const phoneInput = form.querySelector('#main-form_phone');
//   const messageInput = form.querySelector('#main-form_text');
//   const url = 'https://api.telegram.org/bot8002790723:AAGPPZxcNE0zz6459VGSluQyOAD2AcJaGgI';

//   const text = `Сообщение из формы\r\n\r\nИмя: ${nameInput.value}\r\nТелефон: ${phoneInput.value}\r\nСообщение: ${messageInput.value}`;

//   const formData = new FormData();
//   formData.append('chat_id', 22560984);
//   formData.append('parse_mode', 'Markdown');
//   formData.append('text', text);

//   const response = await fetch(url, {
//     method: 'POST',
//     body: formData
//   });

//   nameInput.value = '';
//   phoneInput.value = '';
//   messageInput.value = '';

//   alert('Сообщение отправлено!');


// })
