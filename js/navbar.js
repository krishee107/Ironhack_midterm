const btn = document.querySelector('#btn-hamburguesa');
const menu = document.querySelector('#menu-hamburguesa');
const nav = document.querySelector('.navbar-brand')
btn.addEventListener('click', () =>{
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    nav.classList.toggle('is-active');

});