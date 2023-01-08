import React from 'react'
import slider1 from '../assets/home/slider/slider-1.jpg'
import slider2 from '../assets/home/slider/slider-1.jpg'
import slider3 from '../assets/home/slider/slider-1.jpg'
import slider4 from '../assets/home/slider/slider-1.jpg'

import TarjetasCelulares from './tarjetas/TarjetasCelulares'
import TarjetasSmart from './tarjetas/TarjetasSmart'
import TarjetasNotebooks from './tarjetas/TarjetasNotebooks'

let productosCelulares = [
    {
        "id": 1,
        "nombre": "Apple iPhone 12 Pro Max (512 GB)  ",
        "precio": 870000,
        "descripcion": "Super Retina XDR de 6.7 pulgadas. Chip A14 Bionic, el más rápido en un smartphone. Sistema de cámaras Pro de 12 MP",
        "imagenes": [
            "img-1672792728039.jpg",
            "img-1672792728041.jpg",
            "img-1672792836359.jpg",
            "img-1672792846610.jpg"
        ]
    },
    {
        "id": 2,
        "nombre": "Samsung Galaxy A04 32gb",
        "precio": 42000,
        "descripcion": "Tamaño de la pantalla: 6.5, Memoria interna: 32 GB, Cámara frontal principal: 5 Mpx ",
        "imagenes": [
            "img-1671764466790.webp",
            "img-1671764491720.webp",
            "img-1671764491721.webp",
            "img-1671764499255.webp"
        ]
    },
    {
        "id": 3,
        "nombre": "Moto E40 64 GB 4 GB RAM",
        "precio": 54000,
        "descripcion": " Dispositivo liberado para que elijas la compañía telefónica que prefieras.  Pantalla IPS de 6.5.",
        "imagenes": [
            "img-1671765599799.png",
            "img-1671765599801.png",
            "img-1671765599802.png",
            "img-1671765599803.png"
        ]
    }
]
let productosSmart = [
    {
        "id": 9,
        "nombre": "Smart TV Samsung Neo QLED 4K",
        "precio": 216000,
        "descripcion": "Su resolución es 4K, Adaptive Sound +, OTS, Q-Symphony, Tiene función Screen Share.",
        "imagenes": [
            "img-1671770180242.jpg",
            "img-1671770210883.jpg",
            "img-1671770226148.jpg",
            "img-1671770676992.jpg"
        ]
    },
    {
        "id": 10,
        "nombre": "Smart TV Lenovo LCD 4K 55 100V/240V",
        "precio": 126000,
        "descripcion": "Su resolución es 4K, AI Sound Con Google Play Store, Netflix.",
        "imagenes": [
            "img-1671770676993.jpg",
            "img-1671770721332.jpg",
            "img-1671771124858.jpg",
            "img-1671771124860.jpg"
        ]
    },
    {
        "id": 11,
        "nombre": "Smart TV Philips LED 4K 50 110V/240V",
        "precio": 180000,
        "descripcion": "Su resolución es 4K, AI Sound, Con Prime Video, Disney+, YouTube, Netflix.",
        "imagenes": [
            "img-1671771139960.jpg",
            "img-1671771149730.jpg",
            "img-1671771346755.jpg",
            "img-1671771356021.jpg"
        ]
    },
]
let productosNotebooks = [
    {
        "id": 6,
        "nombre": "Notebook Gamer Gigabyte Intel Core I5",
        "precio": 252000,
        "descripcion": "Procesador Intel Core i5, Resolución de 1920x1080 px, Placa de video NVIDIA GeForce RTX 3060.",
        "imagenes": [
            "img-1671767808205.jpg",
            "img-1671767845678.png",
            "img-1671767845675.png",
            "img-1671767808205.webp"
        ]
    },
    {
        "id": 7,
        "nombre": "Notebook Gamer Exo Intel Core i7",
        "precio": 297000,
        "descripcion": "Procesador Intel Core i7. Resolución de 1920x1080 px, Placa de video NVIDIA GeForce RTX 2060.",
        "imagenes": [
            "img-1671768495237.jpg",
            "img-1671768495238.jpg",
            "img-1671768519073.jpg",
            "img-1671768531860.jpg"
        ]
    },
    {
        "id": 8,
        "nombre": "Notebook Dell Ryzen 7 Rtx 3050ti",
        "precio": 324000,
        "descripcion": "Procesador Intel Core i7. Resolución de 1920x1080 px, Placa de video NVIDIA GeForce RTX 2060.",
        "imagenes": [
            "img-1671768814151.webp",
            "img-1671768824761.jpg",
            "img-1671768874179.jpg",
            "img-1671768874179.webp"
        ]
    },
]

function Main() {
    return (
        <main class="home">

            <section class="section-home">

                <h1 class="welcome">BIENVENIDO<span class="span-color">A TECNOLIFE</span></h1>

                <div class="home-slider" id="home-slider">

                    <div class="container-slider">

                        <div class="slider" id="slider">
                            <div class="slider__section">
                                <img src={slider1} alt="" class="slider__img" />
                            </div>
                            <div class="slider__section">
                                <img src={slider2} alt="" class="slider__img" />
                            </div>
                            <div class="slider__section">
                                <img src={slider3} alt="" class="slider__img" />
                            </div>
                            <div class="slider__section">
                                <img src={slider4} alt="" class="slider__img" />
                            </div>
                        </div>

                        <div class="slider__btn slider__btn--right" id="btn-right">&#62;</div>
                        <div class="slider__btn slider__btn--left" id="btn-left">&#60;</div>

                    </div>
                </div>

                <section class="simple-cards" id="simple-cards">

                    <h1 class="heading">#Marcas <span>destacadas</span> </h1>

                    <div class="box-simple-cards" />
                </section>

            </section>

            <section>
                <h1 class="heading">#Ofertas en <span>Smart Tv</span> </h1>
                <div class="article">
                    <div class="slide-container swiper">
                        <div class="slide-content">
                            <div class="card-wrapper swiper-wrapper">
                                {productosSmart.map((producto, index) =>

                                    <TarjetasSmart
                                        key={index}
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        descripcion={producto.descripcion}
                                        imagenes={producto.imagenes[0]}
                                    />

                                )}
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h1 class="heading">#Ofertas en <span>notebooks</span> </h1>
                <div class="article">
                    <div class="slide-container swiper">
                        <div class="slide-content">
                            <div class="card-wrapper swiper-wrapper">
                                {productosNotebooks.map((producto, index) =>

                                    <TarjetasNotebooks
                                        key={index}
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        descripcion={producto.descripcion}
                                        imagenes={producto.imagenes[0]}
                                    />

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 class="heading">#Ofertas en <span>Celulares</span> </h1>
                <div class="article">
                    <div class="slide-container swiper">
                        <div class="slide-content">
                            <div class="card-wrapper swiper-wrapper">
                                {productosCelulares.map((producto, index) =>

                                    <TarjetasCelulares
                                        key={index}
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        descripcion={producto.descripcion}
                                        imagenes={producto.imagenes[0]}
                                    />

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact" id="contact">

                <h1 class="heading"> <span>#contacta </span>con nosotros </h1>

                <div class="contenedor-m">

                    <form action="https://formsubmit.co/tecnolifeg1@gmail.com" method="POST">

                        <div name="contact-form" class="inputBox">
                            <span class="fas fa-user"></span>
                            <input type="text" placeholder="Nombre" name="Nombre" />
                        </div>

                        <div class="inputBox">
                            <span class="fas fa-envelope"></span>
                            <input type="email" placeholder="Email" name="Email" />
                        </div>

                        <div class="inputBox">
                            <span class="fas fa-phone"></span>
                            <input type="number" placeholder="Teléfono" name="Teléfono" />
                        </div>

                        <div class="inputBox">
                            <span class="fas fa-comment"></span>
                            <textarea class="textarea" type="comments" placeholder="Razón de contacto..."
                                name="Comentario"></textarea>
                        </div>

                        <input type="submit" value="Contactar" class="btn-map" />

                        <input type="hidden" name="_next" value="http://localhost:3000" />

                        <input type="hidden" name="_captcha" value="false" />

                    </form>

                </div>

            </section>

            <div class="up" id="up">
                <input type="button" class="text-up" value="Volver al inicio" />
                <span class="icon">
                    <i class="fas fa-chevron-up"></i>
                </span>
            </div>

        </main>
    )
}

export default Main