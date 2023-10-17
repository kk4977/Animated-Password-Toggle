let input = document.querySelector('.container .userInput');
let eye = document.querySelector('.container .fa-eye');
let eye_slash = document.querySelector('.container .fa-eye-slash');
let passwordBackground = document.querySelector('.container  .password-background');
let lock = document.querySelector('.container .fa-lock');

let passToggle =()=>{
  if(input.type === 'password'){
      input.type = 'text'; 
      passwordBackground.classList.add('expand');
     setTimeout(()=>{
       eye.classList.add('hide');
       eye_slash.classList.remove('hide');      
     },70)
      lock.classList.add('lock-change');
  }else{
     input.type = 'password' 
     passwordBackground.classList.remove('expand');
     setTimeout(()=>{
     eye.classList.remove('hide');
     eye_slash.classList.add('hide');       
     },70)
     lock.classList.remove('lock-change');
  } 
}

eye.addEventListener('click',passToggle);
eye_slash.addEventListener('click',passToggle);