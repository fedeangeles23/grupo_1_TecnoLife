window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("Register vinculado");

    const regExLetter = /^[A-Z]+$/;
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let form = $('#formulario')
    let nombre = $('#name')
    let email = $('#email')
    let inputPass = $('#pass')
    let inputPass2 = $('#pass2')

    let errores = [{
        id: 1,
        elemento:"nombre",
        mensaje: "El Nombre es obligatorio"
    },{
        id: 2,
        elemento:"email",
        mensaje: "El campo Email es obligatorio"
    },{
        id: 3,
        elemento:"inputPass",
        mensaje: "La contraseña es obligatoria"
    },{
        id: 4,
        elemento:"inputPass2",
        mensaje: "Debe confirmar su contraseña"
    },]

    let eye = $('#eye-pass')
    let eye2 = $('#eye-pass2')
    eye.addEventListener('click',(e) => {
        inputPass.type === 'password' ? inputPass.type = 'text' : inputPass.type = 'password'
        if(eye.classList.contains('fa-eye-slash')){
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }else{
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }   
    })

    eye2.addEventListener('click',(e) => {
        inputPass2.type === 'password' ? inputPass2.type = 'text' : inputPass2.type = 'password'
        if(eye2.classList.contains('fa-eye-slash')){
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }else{
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }   
    })

    nombre.addEventListener('blur',() => {
        let error = {
            id: 1,
            elemento:"nombre",
            mensaje: "El Nombre es obligatorio"
        }
        let variable = true
        switch (true) {
            case !nombre.value:
                $('#nameContainer').innerHTML = "<small>El Nombre es obligatorio</small>"
                nombre.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El Nombre es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case regExLetter.test(nombre.value):
                $('#nameContainer').innerHTML = "<small>El Nombre solo acepta letras</small>"
                nombre.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El Nombre solo acepta letras"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#nameContainer').innerHTML = ""
                nombre.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        console.log(errores);
    })
    
    email.addEventListener('blur',() => {
        let error = {
            id: 3,
            elemento:"email",
            mensaje: "El campo Email es obligatorio"
        }
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El campo Email es obligatorio</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "El campo Email es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "El email no coincide con un email valido"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#emailContainer').innerHTML = ""
                email.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 3
                })
                break;
        }
        console.log(errores);
    })
    inputPass.addEventListener('blur',() => {
        let error = {
            id: 4,
            elemento:"inputPass",
            mensaje: "La contraseña es obligatoria"
        }
        let variable = true
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                inputPass.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 4 ){
                        e.mensaje = "La contraseña es obligatoria"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExPass.test(inputPass.value):
                $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 4
                })
                break;
        }
    })
    inputPass2.addEventListener('blur',() => {
        let error = {
            id: 5,
            elemento:"inputPass2",
            mensaje: "Debe confirmar su contraseña"
        }
        let variable = true
        
        switch (true) {
            case !inputPass2.value:
                $('#passContainer2').innerHTML = "<small>La confirmacion de la contraseña no puede estar vacia</small>"
                inputPass2.style.border = "1px solid red"
                error.mensaje = "La confirmacion de la contraseña no puede estar vacia"
                errores.forEach(e => {
                    if(e.id === 5 ){
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                
                break;
            case inputPass2.value != inputPass.value:
                $('#passContainer2').innerHTML = "<small>Las contraseñas no coinciden</small>"
                error.mensaje = "Las contraseñas no coinciden"
                inputPass2.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 5 ){
                        variable = false
                    }
                });
                
                if (variable) {
                    errores.push(error)
                }
                
                break;
            default:
                $('#passContainer2').innerHTML = ""
                inputPass2.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 5
                })
                break;
        }
    })


})