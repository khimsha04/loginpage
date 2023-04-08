const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const errorMesage = document.querySelector('.errorMessage');
const errorMesage2 = document.querySelector('.errorMessage2');
const userError = document.querySelector('.userError');
const recover = document.querySelector('.recover');
const recoverInput = document.querySelector('.recoverInput');
const sendButton = document.querySelector('.sendButton');
const popup = document.querySelector('.popup');



button.addEventListener('click', (e) => {
  e.preventDefault();
  if(password.value.length > 4 && username.value.length  > 1 ){
    alert('please try later');
  }
  if (password.value.length < 4) {
    errorMesage2.style.display = 'block';
    password.style.border = '1px solid red';
   
  } else {
    password.style.border = '1px solid blue';
    errorMesage.style.display = 'none';
    }

  if (password.value === '') {
    errorMesage.style.display = 'block';
    errorMesage2.style.display = 'none';
    password.style.border = '1px solid red';
  }
  if (username.value === '') {
    userError.style.display = 'block';
    username.style.border = '1px solid red';
  }else{
    userError.style.display = 'none'
    username.style.border = '1px solid blue';
  }


});
recover.addEventListener('click', ()=>{
  popup.style.display = 'block';
})
sendButton.addEventListener('click', ()=>{
  
  alert('New password has been sent successfully');
  popup.style.display = 'none';
})


