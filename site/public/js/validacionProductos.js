window.addEventListener('load', () => {

    /* Funciones para no declarar document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
            btn.style.backgroundColor = '#1a78fd'
        } else {
            btn.disabled = true
            btn.style.backgroundColor = '#545454'
        }
    }



    /* Elementos que se trabajan para validar */
    let Titulo = $('#Titulo')
    let Precio = $('#Precio')
    let Descuento = $('#Descuento')
    let Stock = $('#Stock')
    let Categoria = $('#Categoria')
    let Marca = $('#Marca')
    let Descripcion = $('#Descripcion')

    let img = $('#product-img')
    let img2 = $('#product-sub-img-1')
    let img3 = $('#product-sub-img-2')
    let img4 = $('#product-sub-img-3')

    let btn = $('#btn-submit')

    /* Expresiones regulares para utilizar */
    let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    /* validar elementos */
    /* Titulo del producto */
    Titulo.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorTitulo').innerHTML = "Debes ingresar el titulo de tu producto"
                this.classList.add('is-invalid')
                validate.Titulo = false
                break;
            case !(this.value.trim().length > 2 && this.value.trim().length < 100):
                $('#errorTitulo').innerHTML = "El titulo del producto debe contener un mínimo de 2 letras y un máximo de 100"
                this.classList.add('is-invalid')
                validate.Titulo = false
                break;
            default:
                $('#errorTitulo').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Titulo = true
                break;
        }
        funcValidate(validate)
    })

    /* precio del producto */
    Precio.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorPrecio').innerHTML = "Debes ingresar el precio de tu producto"
                this.classList.add('is-invalid')
                validate.Precio = false
                break;
            case !(this.value.trim().length >= 2 && this.value.trim().length <= 16):
                $('#errorPrecio').innerHTML = "El precio del producto debe contener un mínimo de 2 números y un máximo de 10"
                this.classList.add('is-invalid')
                validate.Precio = false
                break;
            default:
                $('#errorPrecio').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Precio = true
                break;
        }
        funcValidate(validate)
    })

    Descuento.addEventListener('blur', function () {
        switch (true) {
            case !(this.value.trim().length <= 2):
                $('#errorDescuento').innerHTML = "El descuento no debe ser mayor a 2 cifras"
                this.classList.add('is-invalid')
                validate.Descuento = false
                break;
            default:
                $('#errorDescuento').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Descuento = true
                break;
        }
        funcValidate(validate)
    })
    Stock.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorStock').innerHTML = "Debes ingresar el stock de tu producto"
                this.classList.add('is-invalid')
                validate.Stock = false
                break;
            case !regExNumber.test(this.value.trim()):
                $('#errorStock').innerHTML = "Debes ingresar un numero menor a 1000"
                this.classList.add('is-invalid')
                validate.Stock = false
                break;
            case !(this.value.trim().length >= 1 && this.value.trim().length <= 16):
                $('#errorStock').innerHTML = "El stock del producto debe contener 1 caracter y un máximo de 10"
                this.classList.add('is-invalid')
                validate.Stock = false
                break;
            default:
                $('#errorStock').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Stock = true
                break;
        }
        funcValidate(validate)
    })
    Categoria.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorCategoria').innerHTML = "Debes ingresar una categoria"
                this.classList.add('is-invalid')
                validate.Categoria = false
                break;

            default:
                $('#errorCategoria').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Categoria = true
                break;
        }
        funcValidate(validate)
    })
    Marca.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorMarca').innerHTML = "Debes ingresar una marca"
                this.classList.add('is-invalid')
                validate.Marca = false
                break;
            default:
                $('#errorMarca').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Marca = true
                break;
        }
        funcValidate(validate)
    })
    Descripcion.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorDescripcion').innerHTML = "Debes ingresar una descripcion para tu producto"
                this.classList.add('is-invalid')
                validate.Descripcion = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#errorDescripcion').innerHTML = "La descripcion del producto debe contener 10 caracteres y un máximo de 255"
                this.classList.add('is-invalid')
                validate.Descripcion = false
                break;
            default:
                $('#errorDescripcion').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.Descripcion = true
                break;
        }
        funcValidate(validate)
    })

    img.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(img.value):
                $('#errorImg').innerHTML = "Solo se permite ingresar una imagen valida fomato (jpg---jpeg---png---jfif---gif---webp)"
                validate.img = false
                break;
            default:
                $('#errorImg').innerHTML = null
                validate.img = true
                break;
        }
        funcValidate(validate)
    })
    img2.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(img2.value):
                $('#errorImg').innerHTML = "Solo se permite ingresar una imagen valida fomato (jpg---jpeg---png---jfif---gif---webp)"
                validate.img2 = false
                break;
            default:
                $('#errorImg').innerHTML = null
                validate.img2 = true
                break;
        }
        funcValidate(validate)
    })
    img3.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(img3.value):
                $('#errorImg').innerHTML = "Solo se permite ingresar una imagen valida fomato (jpg---jpeg---png---jfif---gif---webp)"
                validate.img3 = false
                break;
            default:
                $('#errorImg').innerHTML = null
                validate.img3 = true
                break;
        }
        funcValidate(validate)
    })
    img4.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(img4.value):
                $('#errorImg').innerHTML = "Solo se permite ingresar una imagen valida fomato (jpg---jpeg---png---jfif---gif---webp)"
                validate.img4 = false
                break;
            default:
                $('#errorImg').innerHTML = null
                validate.img4 = true
                break;
        }
        funcValidate(validate)
    })

    /* Validacion */
    const validate = {
        Titulo: false,
        Precio: false,
        Descuento: true,
        Stock: false,
        Categoria: false,
        Marca: false,
        Descripcion: false,
        img: true,
        img2: true,
        img3: true,
        img4: true
    }

    funcValidate(validate)
})