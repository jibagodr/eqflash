const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

if(username.toLowerCase() === 'eqflash' && pw === 'eqflash'){
  message.innerHTML = 'Welcome to the gaming world!!!';
} else if(!username || !pw){
  message.innerHTML = 'Add some client-side validation!';
} else {
  message.innerHTML = 'Hurray for client-side validation!';
}
