if (!sessionStorage.getItem("welcome")) {
    Swal.fire({
        title: "Bienvenido a Tecno Life!",  /* Título de bienvenida */
        // text:
        // html:
        /* icon: 'success', */ /* Icono */
        confirmButtonText: 'Vamos! 😁​', /* Texto del botón */
        footer: "Gracias por su visita.",   /* Pie de alerta */
        // width:
        // padding:
        // background:
        // grow:
        backdrop: true, /* Oscurece el fondo */
        timer: 20000,    /* Tiempo de muestreo */
        timerProgressBar: true, /* Muestra barra de progreso */
        // toast:
        // position:
        allowOutsideClick: true, /* Permite quitar con Click por fuera */
        allowEscapeKey: true, /* Permite quitar con Escape */
        allowEnterKey: true,    /* Permite quitar con Enter */
        stopKeydownPropagation: true, /* Anula la progragación de eventos */

        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:

        customClass: {

            // 	container:
            popup: 'popup-class', /* Clase del popup */
            // 	header:
            // 	title:
            // 	closeButton:
            // 	icon:
            // 	image:
            // 	content:
            // 	input:
            // 	actions:
            // 	confirmButton:
            // 	cancelButton:
            // 	footer:	

        },

        showConfirmButton: true,    /* Muestra el botón para confirmar */
        confirmButtonColor: '#2D3C60',  /* Color del botón */
        confirmButtonAriaLabel: 'Vamos!',   /* Etiqueta del botón confirmar */

        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:

        buttonsStyling: true,  /* Botón X con estilo */
        showCloseButton: true,  /* Muestra el botón para cerrar */
        closeButtonAriaLabel:  'Cerrar', /* Etiqueta de la X para cerrar */

        imageUrl: 'https://i.postimg.cc/kX0HRggg/image.png',
        imageWidth: 100,    /* Ancho de imagen */
        imageHeight: 100,   /* Altura de imagen */
        imageAlt: 'Logo de la página',

    })

    sessionStorage.setItem("welcome", true)
}