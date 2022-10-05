const btn = document.querySelector('#btn-hamburguesa');
const menu = document.querySelector('#menu-hamburguesa');
const nav = document.querySelector('.navbar-brand')
btn.addEventListener('click', () =>{
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    nav.classList.toggle('is-active');

});


/*Modo oscuro*/
const lightMode = document.querySelector('.light-mode');
lightMode.addEventListener('click', () =>{
    
    //Si ya tenía modo oscuro
    if(document.querySelector('html').classList.contains('dark-mode')){
        //Lo quitamos
        document.cookie = "dark=false; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    }
    else{
        //Lo ponemos
        document.cookie = "dark=true; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    }
    
    lightMode.classList.toggle('oscuro');
    document.querySelector('html').classList.toggle('dark-mode')

})

//Comprobamos si ya tiene el modo oscuro al cargar la página
window.addEventListener('load', () =>{
    //Tiene modo oscuro
    if(document.cookie.includes('dark=true')){
        document.querySelector('html').classList.toggle('dark-mode')  
        lightMode.classList.toggle('oscuro');  
        console.log('Modo oscuro')
    }
})