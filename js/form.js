const submit = document.querySelector('.contact-form .button');

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    contact = {};

    contact.nombre = document.querySelector('.full-name-input').value ;
    contact.email = document.querySelector('.email-input').value ;
    contact.phone = document.querySelector('.phone-input').value ;
    contact.message = document.querySelector('.message-input').value ;

    console.log(contact)
})