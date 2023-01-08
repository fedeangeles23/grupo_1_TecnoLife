import React from 'react'
import logo from '../assets/home/logo/logo-tecnolife.jpg'
import llaveInglesa from '../assets/home/iconos/llave-inglesa.png'

function Header() {
    return (
        <header>
            <a href="/" class="logo">
                <img src={logo} alt="" />
            </a>
            <div class="navigation">
                <ul class="menu">
                    <div class="close-btn"></div>
                    <li class="menu-item"><a href="/">
                        <div class="fas fa-home" id="menu-btn"></div> INICIO
                    </a></li>

                    <li class="menu-item">
                        <a class="sub-btn" href="#"><div class="fas fa-bars" id="menu-btn"></div> CATEGORÍAS</a>
                        <ul class="sub-menu">
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Smartphones <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="#">Samsung</a></li>
                                    <li class="more-item"><a href="#">Apple</a></li>
                                    <li class="more-item"><a href="#">Xiaomi</a></li>
                                    <li class="more-item"><a href="#">Motorola</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Notebooks <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="#">Samsung</a></li>
                                    <li class="more-item"><a href="#">Lenovo</a></li>
                                    <li class="more-item"><a href="#">Acer</a></li>
                                    <li class="more-item"><a href="#">HP</a></li>
                                    <li class="more-item"><a href="#">Dell</a></li>
                                    <li class="more-item"><a href="#">Exo</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href=""> Tablets <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="/products/marca/1">Samsung</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href=""> Auriculares <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Xiaomi</a></li>
                                </ul>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Sony</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Televisores <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Samsumg</a></li>
                                    <li class="more-item"><a href="#">Phillips</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Monitores <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Samsung</a></li>
                                    <li class="more-item"><a href="#">Phillips</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Teclados <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">HP</a></li>
                                    <li class="more-item"><a href="#">Red Dragon</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Mouse <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Lenovo</a></li>
                                    <li class="more-item"><a href="#">Noga</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Parlantes <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Sony</a></li>
                                    <li class="more-item"><a href="#">HP</a></li>
                                </ul>
                            </li>
                            <li class="sub-item more">
                                <a class="more-btn" href="#">Cargadores <i class="fas fa-angle-right"></i></a>
                                <ul class="more-menu">
                                    <li class="more-item"><a href="">Apple</a></li>
                                    <li class="more-item"><a href="#">Nokia</a></li>
                                </ul>
                            </li>


                        </ul>
                    </li>
                    <li class="menu-item">
                        <a class="sub-btn" href="#">
                            <div class="fas fa-user" id="user-btn"></div> CUENTA
                        </a>
                        <ul class="sub-menu">
                            <li class="sub-item"><a href="/iniciar-sesion">Iniciar Sesión <i class="fas fa-angle-right"></i></a></li>
                            <li class="sub-item"><a href="/registro">Registrarse <i class="fas fa-angle-right"></i></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a class="sub-btn" href="#">
                            <div class="fas fa-shopping-cart" id="cart-btn"></div> CARRITO
                        </a>
                        <ul class="sub-menu">
                            <li class="sub-item"><a href="/">EN DESARROLLO </a><i class="fas fa-angle-right"></i><img class="desarrollo" src={llaveInglesa} alt="" /></li>
                        </ul>
                    </li>


                    <form class="search-box">
                        <input name="search" type="text" placeholder="Ingrese para buscar.." />
                        <div class="search-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="cancel-icon">
                            <i class="fas fa-times"></i>
                        </div>
                    </form>
                </ul>

            </div>

        </header>
    )
}

export default Header