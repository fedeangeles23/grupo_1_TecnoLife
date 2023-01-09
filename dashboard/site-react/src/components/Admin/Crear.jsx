import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'

function Crear() {


    const navigate = useNavigate();
    const [marcat, setmarcat] = useState({})
    const [id, setId] = useState('0')
    const [isLoading, setIsLoading] = useState(true)

    const actualUrl = window.location.href;

    const [values, setValues] = useState({
        Titulo: '',
        Marca: '',
        Precio: '',
        Descuento: '',
        Stock: '',
        imagen1: '',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        Categoria: '',
        Descripcion: '',

    })

    useEffect(() => {
        let barra = actualUrl.lastIndexOf('/') + 1
        let id = actualUrl.substring(barra, 100)
        setId(id)
        fetch(`http://localhost:3001/api/marcat`)
            .then((response) => response.json())
            .then((valores) => {
                setmarcat(valores.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }, [actualUrl, isLoading])


    const handleChange = (e) => {
        let { target } = e
        let { name, value } = target

        let newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    };
    console.log(id);

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post(`http://localhost:3001/api/crear`, values)
        // console.log(response);
        if (response.status === 200) {
            return navigate('/admin')
        }
    }

    if (isLoading) {
        return (
            <div>
                Cargando ...
            </div>
        )
    }

    return (
        <main class="create">
            {/* Titulo  */}
            <h1 class="text-center pt-5 pb-5">Creando un producto nuevo </h1>
            {/* Comienzo del Formulario */}
            <form onSubmit={handleSubmit}>
                {/* Contenedor de imagenes y Principales */}
                <div class="container">
                    <div class="row justify-content-between align-items-center">

                        {/* Principales */}
                        <div class="col col-lg-4 col-md-12 col-sm-12">
                            {/*  Titulo del formulario  */}
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="Titulo" placeholder="Nombre del producto" id="Titulo" onChange={handleChange} />
                                <label for="Titulo">Nombre del producto</label>
                                <p class="span text-danger" id="errorTitulo">

                                </p>
                            </div>
                            {/* Marca del formulario  */}
                            <div class="form-floating mb-3">
                                <select class="form-select" name="marca" id="Marca" aria-label="Floating label select example" onChange={handleChange} >
                                    <option hidden value="">Selecciona una marca</option>

                                    {
                                        marcat.marcas.map(values => (
                                            <option value={values.id}>{values.nombre}</option>
                                        ))
                                    }

                                </select>
                                <p class="span text-danger" id="errorMarca">

                                </p>
                            </div>
                            {/* Precio del formulario  */}
                            <div class="form-floating mb-3">
                                <input class="form-control" type="number" name="Precio" placeholder="Precio del producto" id="Precio" onChange={handleChange} />
                                <label class="form-label" for="price">Precio del producto</label>
                                <p class="span text-danger" id="errorPrecio">

                                </p>
                            </div>
                            {/* Descuento del formulario */}
                            <div class="form-floating mb-3">
                                <input class="form-control" type="number" name="Descuento" placeholder="Descuento del producto" id="Descuento" onChange={handleChange} />
                                <label class="form-label" for="discount">Descuento del producto</label>
                                <p class="span text-danger" id="errorDescuento">

                                </p>
                            </div>
                            {/* Stock del formulario */}
                            <div class="form-floating mb-3">
                                <input class="form-control" type="number" name="Stock" placeholder="Stock con el que cuenta el producto" id="Stock" onChange={handleChange} />
                                <label class="form-label" for="stock">Stock con el que cuenta el producto</label>
                                <p class="span text-danger" id="errorStock">

                                </p>
                            </div>
                        </div>

                        {/* Imagenes! */}

                        <div class="col col-lg-7 col-md-12 col-sm-12">

                            <section class="img-product">
                                <div class="container">
                                    <div class="row">
                                        {/* Imagen 1 */}
                                        <div class="col col-5">
                                            <label class="selectImg" for="product-img">
                                                <img id="img-preview" class="img-fluid img-thumbnail imagen-height rounded" src="/img/products/image-default.png" alt="" />
                                                <div class="imgHover">
                                                    <p class="text-center">Selecionar Imagen 1</p>
                                                </div>
                                            </label>
                                            <div class="form-admin__box inactivo">
                                                <input class="d-none" id="product-img" type="file" name="imagen" placeholder="Imagen del Producto" multiple onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 2 */}
                                        <div class="col col-5">
                                            <label class="selectImg" for="product-sub-img-1">
                                                <img id="sub-img-preview-1" class="img-fluid img-thumbnail  imagen-height rounded" src="/img/products/image-default.png" alt="" />
                                                <div class="imgHover">
                                                    <p class="text-center">Selecionar Imagen 2</p>
                                                </div>
                                            </label>
                                            <div class="form_desciption__box inactivo">
                                                <input class="d-none" id="product-sub-img-1" type="file" name="imagen" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 3 */}
                                        <div class="col col-5">
                                            <label class="selectImg" for="product-sub-img-2">
                                                <img id="sub-img-preview-2" class="img-fluid img-thumbnail imagen-height rounded" src="/img/products/image-default.png" height="auto" alt="" />
                                                <div class="imgHover">
                                                    <p class="text-center">Selecionar Imagen 3</p>
                                                </div>
                                            </label>
                                            <div class="form_desciption__box inactivo">
                                                <input class="d-none " id="product-sub-img-2" type="file" name="imagen" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 4 */}
                                        <div class="col col-5">
                                            <label class="selectImg" for="product-sub-img-3">
                                                <img id="sub-img-preview-3" class="img-fluid img-thumbnail imagen-height rounded" src="/img/products/image-default.png" alt="" />
                                                <div class="imgHover">
                                                    <p class="text-center">Selecionar Imagen 4</p>
                                                </div>
                                            </label>
                                            <div class="form_desciption__box inactivo">
                                                <input class="d-none" id="product-sub-img-3" type="file" name="imagen" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Columnas */}

                                    </div>
                                    <p class="span text-danger" id="errorImg">

                                    </p>
                                </div>
                            </section>
                        </div>
                        {/* Fin del contenido principal */}
                    </div>
                </div>

                <div class="container">
                    <div class="row">

                        {/* Categorias del formulario */}
                        <div class="container m-3" >
                            <div class="row justify-content-around align-items-center">
                                <div class="col col-4">
                                    <h3 class="text-center">Categorias</h3>
                                    <select class="form-select" name="Categoria" id="Categoria" aria-label="Floating label select example" onChange={handleChange} >
                                        <option hidden value="">Selecciona una categoria</option>

                                        {
                                            marcat.categorias.map(values => (
                                                <option value={values.id}>{values.name}</option>
                                            ))
                                        }

                                    </select>
                                    <p class="span text-danger" id="errorCategoria">

                                    </p>
                                </div>

                            </div>
                        </div>
                        {/* Descripcion del formulario */}
                        <div class="container m-3" >
                            <div class="row">
                                <div class="col col-12">
                                    <div class="form-floating">
                                        <textarea name="Descripcion" id="Descripcion" cols="300" rows="300" class="form-control" placeholder="Leave a comment here" onChange={handleChange}></textarea>
                                        <label for="Descripcion">Descripcion del producto</label>
                                    </div>
                                    <p class="span text-danger" id="errorDescripcion">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div class="create-button text-center mt-5 pb-5">
                    <button class="btn btn-primary" id="btn-submit" type="submit">Crear producto</button>
                </div>
            </form>
        </main>
    )
}

export default Crear