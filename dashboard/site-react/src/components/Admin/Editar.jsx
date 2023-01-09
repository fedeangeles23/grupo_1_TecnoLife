import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'

function Editar() {

    const navigate = useNavigate();
    const [resultado, setresultado] = useState([])
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
        fetch(`http://localhost:3001/api/producto/${id}`)
            .then((response) => response.json())
            .then((valores) => {
                setresultado(valores.data);
                fetch(`http://localhost:3001/api/marcat`)
                    .then((response) => response.json())
                    .then(resultMarcat => {
                        setmarcat(resultMarcat.data)
                        setIsLoading(false)
                    })
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
        let response = await axios.put(`http://localhost:3001/api/editar/${id}`, values)
        // console.log(response);
        if (response.status === 200) {
            return navigate('/admin')
        }
    }

    console.log(resultado);

    if (isLoading) {
        return (
            <div>
                Cargando ...
            </div>
        )
    }

    return (
        <main ClassName="create">
            {/* Titulo  */}
            <h1 ClassName="text-center pt-5 pb-5">Editando un producto</h1>
            {/* Comienzo del Formulario */}
            <form onSubmit={handleSubmit}>
                <div ClassName="container">
                    <div ClassName="row justify-content-between align-items-center">
                        {/* Principales */}
                        <div ClassName="col col-lg-4 col-md-12 col-sm-12">
                            <div ClassName="form-floating mb-3">
                                <input type="text" ClassName="form-control" name="Titulo" placeholder="Nombre del producto" defaultValue={resultado[0].nombre} id="Titulo" onChange={handleChange} />
                                <label for="Titulo">Nombre del producto</label>
                                <p ClassName="span text-danger" id="errorTitulo">

                                </p>
                            </div>
                            <div ClassName="form-floating mb-3">
                                <select ClassName="form-select" name="marca" id="Marca" aria-label="Floating label select example" onChange={handleChange} >

                                    {
                                        marcat.marcas.map(values => (
                                            <option value={values.id}>{values.nombre}</option>
                                        ))
                                    }

                                </select>
                                <p ClassName="span text-danger" id="errorMarca">

                                </p>
                            </div>
                            <div ClassName="form-floating mb-3">
                                <input ClassName="form-control" type="number" name="Precio" placeholder="Precio del producto" defaultValue={resultado[0].precio} id="Precio" onChange={handleChange} />
                                <label ClassName="form-label" for="price">Precio del producto</label>
                                <p ClassName="span text-danger" id="errorPrecio">

                                </p>
                            </div>
                            <div ClassName="form-floating mb-3">
                                <input ClassName="form-control" type="number" name="Descuento" placeholder="Descuento del producto" defaultValue={resultado[0].descuento} id="Descuento" onChange={handleChange} />
                                <label ClassName="form-label" for="discount">Descuento del producto</label>
                                <p ClassName="span text-danger" id="errorDescuento">

                                </p>
                            </div>
                            <div ClassName="form-floating mb-3">
                                <input ClassName="form-control" type="text" name="Stock" placeholder="Stock con el que cuenta el producto" defaultValue={resultado[0].stock} id="Stock" onChange={handleChange} />
                                <label ClassName="form-label" for="stock">Stock con el que cuenta el producto</label>
                                <p ClassName="span text-danger" id="errorStock">

                                </p>
                            </div>
                        </div>
                        {/*  Imagenes! */}

                        <div ClassName="col col-lg-7 col-md-12 col-sm-12">

                            <section ClassName="img-product">
                                <div ClassName="container">
                                    <div ClassName="row">
                                        {/* Imagen 1 */}
                                        <div ClassName="col col-5">
                                            <label ClassName="selectImg" for="product-img">
                                                <img id="img-preview" ClassName="img-fluid img-thumbnail imagen-height rounded" alt="" />
                                                <div ClassName="imgHover">
                                                    <p ClassName="text-center">Selecionar Imagen 1</p>
                                                </div>
                                            </label>
                                            <div ClassName="form-admin__box inactivo">
                                                <input ClassName="d-none" id="product-img" type="file" name="imagen1" placeholder="Imagen del Producto" multiple onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 2  */}
                                        <div ClassName="col col-5">
                                            <label ClassName="selectImg" for="product-sub-img-1">
                                                <img id="sub-img-preview-1" ClassName="img-fluid img-thumbnail  imagen-height rounded" alt="" />
                                                <div ClassName="imgHover">
                                                    <p ClassName="text-center">Selecionar Imagen 2</p>
                                                </div>
                                            </label>
                                            <div ClassName="form_desciption__box inactivo">
                                                <input ClassName="d-none" id="product-sub-img-1" type="file" name="imagen2" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 3 */}
                                        <div ClassName="col col-5">
                                            <label ClassName="selectImg" for="product-sub-img-2">
                                                <img id="sub-img-preview-2" ClassName="img-fluid img-thumbnail imagen-height rounded" alt="" />
                                                <div ClassName="imgHover">
                                                    <p ClassName="text-center">Selecionar Imagen 3</p>
                                                </div>
                                            </label>
                                            <div ClassName="form_desciption__box inactivo">
                                                <input ClassName="d-none " id="product-sub-img-2" type="file" name="imagen3" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Imagen 4  */}
                                        <div ClassName="col col-5">
                                            <label ClassName="selectImg" for="product-sub-img-3">
                                                <img id="sub-img-preview-3" ClassName="img-fluid img-thumbnail imagen-height rounded" alt="" />
                                                <div ClassName="imgHover">
                                                    <p ClassName="text-center">Selecionar Imagen 4</p>
                                                </div>
                                            </label>
                                            <div ClassName="form_desciption__box inactivo">
                                                <input ClassName="d-none" id="product-sub-img-3" type="file" name="imagen4" placeholder="Imagen del Producto" onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Columnas  */}

                                    </div>
                                    <p ClassName="span text-danger" id="errorImg">

                                    </p>
                                </div>
                            </section>
                        </div>
                        {/*  Fin del contenido principal */}
                    </div>
                </div>
                <div ClassName="container">
                    <div ClassName="row">

                        {/* Selects */}
                        <div ClassName="container m-3" >
                            <div ClassName="row justify-content-around align-items-center">
                                <div ClassName="col col-4">
                                    <h3 ClassName="text-center">Categorias</h3>
                                    <select ClassName="form-select" name="Categoria" id="Categoria" aria-label="Floating label select example" onChange={handleChange}>

                                        {
                                            marcat.categorias.map(values => (
                                                <option value={values.id}>{values.name}</option>
                                            ))
                                        }

                                    </select>
                                    <p ClassName="span text-danger" id="errorCategoria">

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div ClassName="container m-3" >
                            <div ClassName="row">
                                <div ClassName="col col-12">
                                    <div ClassName="form-floating">
                                        <textarea name="Descripcion" id="Descripcion" cols="30 " rows="5" ClassName="form-control" placeholder="Leave a comment here" onChange={handleChange}> </textarea>
                                        <label for="Descripcion">Descripcion del producto</label>
                                    </div>
                                    <p ClassName="span text-danger" id="errorDescripcion">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div ClassName="create-button text-center mt-5 pb-5">
                    <button ClassName="btn btn-primary" type="submit">Editar producto</button>
                    <NavLink to="/admin/productos"><button type='reset'>Cancelar</button></NavLink>
                </div>
            </form>
        </main>
    )
}

export default Editar