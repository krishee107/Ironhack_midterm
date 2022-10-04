const submit = document.querySelector('.contact-form .button');

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    contact = {};

    //Recogemos los valores
    let nombre = document.querySelector('.full-name-input') ;
    let email  = document.querySelector('.email-input');
    let phone  = document.querySelector('.phone-input') ;
    let message= document.querySelector('.message-input');

    //Los añadimos
    contact.nombre = nombre.value;
    contact.email = email.value ;
    contact.phone = phone.value;
    contact.message = message.value;
    //los mostramos
    console.log(contact)

    //vaciamos los imputs
    nombre.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
})