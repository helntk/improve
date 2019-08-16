function navbar(){
const button = document.querySelector('.navbar-burger');
const nav = document.querySelector('.navbar-nav');
const navlink = document.querySelector('nav-link')
 button.addEventListener('click', ()=>{
     nav.classList.toggle('nav-active');

 })
}

navbar();