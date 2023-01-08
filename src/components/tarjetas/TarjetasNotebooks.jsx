import React from 'react'
import PropTypes from 'prop-types'

function TarjetasNotebooks({id, nombre, precio, descripcion, imagenes}) {
    return (
        <div class="card swiper-slide">
            <div class="img-product">
                <a href={`/detalleDeProducto/${id}`}>
                    <img class="item" src={`/products/${imagenes}`} alt="" />
                </a>
            </div>

            <div class="show-details">
                <span class="show_name">
                    {nombre}
                </span>
                <p>
                    {descripcion}
                </p>
            </div>

            <div class="color-price">

                <div class="color-option">
                    <span class="color">Precio:</span>
                </div>

                <div class="price">
                    <span class="price_num">${precio}</span>
                    <span class="price_letter">Precio lista</span>
                </div>

            </div>

            <div class="button">
                <div class="button-layer"></div>
                <button><a href='/'></a>Añadir al carrito</button>
            </div>

            <div class="button">
                <div class="button-layer"></div>
                <a href="/"><button>Ver Detalles</button></a>
            </div>

        </div>
    )
}

TarjetasNotebooks.propTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    descripcion: PropTypes.string,
    imagenes: PropTypes.string,
}
TarjetasNotebooks.defaultProps = {
    id: 0,
    nombre: "Nombre por defecto",
    precio: 5555,
    descripcion: 'Lorem ipsum amet',
    imagenes: 'image-default.png',
}

export default TarjetasNotebooks