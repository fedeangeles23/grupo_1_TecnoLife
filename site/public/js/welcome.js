if( !sessionStorage.getItem("welcome")){
    Swal.fire({
        title: "Bienvenido a Tecno Life 😁​",
        timer: 4000,
        timerProgressBar: true
    })
    
    sessionStorage.setItem("welcome", true)
 }
