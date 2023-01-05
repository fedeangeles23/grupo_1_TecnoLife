import React from 'react'

function Footer() {
    return (
        <footer class="footer">
            <div class="container-f">
                <div class="row-f">
                    <div class="footer-col">
                        <h4>Compañía</h4>
                        <ul>
                            <li><a href="/">Ir al Inicio</a></li>
                            <li><a href="/contactanos">Contáctanos</a></li>
                            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                            <li><a href="/trabaja-con-nostros">Trabaja con nosotros</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="#">Ateción al cliente</a></li>
                            <li><a href="#">Medios de pago</a></li>
                            <li><a href="#">Formas de envío</a></li>
                            <li><a href="#">Cambios y Devoluciones</a></li>
                            <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Legales</h4>
                        <ul>
                            <li><a href="/politica-y-privacidad">Política y Privacidad</a></li>
                            <li><a href="/terminos-y-condiciones">Términos y condiciones</a></li>
                            <li><a href="#">Políticas de Cambio</a></li>
                            <li><a href="#">Defensa al consumidor</a></li>
                            <li><a href="#">Usuarios Financieros</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="https://api.whatsapp.com/send/?phone=541127254634&text=Hola%21+Escribenos+tu+consulta+a+nuestro+WhatsApp&app_absent=0"><i class="fab fa-whatsapp"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer