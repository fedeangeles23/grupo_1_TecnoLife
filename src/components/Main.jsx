import React from 'react'
import slider1 from '../assets/home/slider/slider-1.jpg'
import slider2 from '../assets/home/slider/slider-1.jpg'
import slider3 from '../assets/home/slider/slider-1.jpg'
import slider4 from '../assets/home/slider/slider-1.jpg'

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