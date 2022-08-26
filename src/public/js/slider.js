const slider = document.querySelector("#slider");   /* Llamo al selector con la id slider */
let sliderSection = document.querySelectorAll(".slider__section")   /* LLamo a todos los selectores de las secciones */
let sliderSectionLast = sliderSection[sliderSection.length -1]; /* Capturo el último elemento de los selectores y lo posiciono al principio */

const btnLeft = document.querySelector("#btn-left") /* Capturo al botón izquierdo del slider */
const btnRight = document.querySelector("#btn-right")   /* Capturo al botón derecho del slider */

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* Voy a insertar el último elemento en el inicio del slider */

/* Función para avanzar en el slider */

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];  /* Guardo los section que van cambiando constantemente. */
    slider.style.marginLeft = "-200%";  /* Para simular un corrimiento al siguiente elemento */
    slider.style.transition = "all 0.5s"    /* Tiempo de transiciones */
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);  /* Inserto antes que termine el slider el elemento en la posición 0  */
        slider.style.marginLeft = "-100%";  /* Lo regreso a su estado original mandando el elemento en la posición -1 al final nuevamente para simular que dio la vuelta */
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
})

/* Función para ir a la imagen previa */

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");  /* Guardo los section que van cambiando constantemente. */
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";  /* Para simular un corrimiento al siguiente elemento */
    slider.style.transition = "all 0.5s"    /* Tiempo de transiciones */
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);  /* Inserto antes que termine el slider el elemento en la posición 0  */
        slider.style.marginLeft = "-100%";  /* Lo regreso a su estado original mandando el elemento en la posición -1 al final nuevamente para simular que dio la vuelta */
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Prev();
});


/* Función para que avance el slider a la derecha de manera automática */

setInterval(function(){
    Next();
}, 4000)



