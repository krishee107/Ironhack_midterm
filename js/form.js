const submit = document.querySelector('.contact-form .button');
submit.addEventListener('click', (e) =>{
    e.preventDefault();
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    //Recogemos los valores
    let nombre = document.querySelector('.full-name-input') ;
    let email  = document.querySelector('.email-input');
    let phone  = document.querySelector('.phone-input') ;
    let message= document.querySelector('.message-input');

    //Validar form
    //Si no ha llenado los campos obligatorios
    if(nombre.value.trim() === "" || message.value.trim() ===""){
        swal("Error", "Es necesario llenar el nombre y el mensaje", "error");
    //Si el email no es un email
    }else if(email.value.trim() != "" && !re.exec(email.value))
        swal("Error", "El email no es válido", "error");
    //Si el teléfono no es válido
    else if( phone.value != "" && ((phone.value).length != 9 || isNaN(phone.value)) )
        swal("Error", "Teléfono no válido", "error");
    //Si todo está bien
    else{
        contact = {};

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
    }

})
