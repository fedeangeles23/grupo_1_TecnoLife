// PRODUCTOS
const productos = [
    // Notebooks
    {
        id: "Notebook-01",
        titulo: "Notebook Acer Aspire 5",
        imagen: "./img/Notebooks/Acer-Aspire-5.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio: 1000
    },
    {
        id: "Notebook-02",
        titulo: "Notebook 02",
        imagen: "./img/Notebooks/Acer-Aspire-5.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio: 1000
    },
    {
        id: "Notebook-03",
        titulo: "Notebook 03",
        imagen: "./img/Notebooks/Acer-Aspire-5.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio: 1000
    },
    {
        id: "Notebook-04",
        titulo: "Notebook 04",
        imagen: "./img/Notebooks/Acer-Aspire-5.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio: 1000
    },
    {
        id: "Notebook-05",
        titulo: "Notebook 05",
        imagen: "./img/Notebooks/Acer-Aspire-5.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio: 1000
    },
    // Celulares
    {
        id: "Celular-01",
        titulo: "Samsung A03 Core ",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celular",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-02",
        titulo: "Celular 02",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-03",
        titulo: "Celular 03",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-04",
        titulo: "Celular 04",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-05",
        titulo: "Celular 05",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-06",
        titulo: "Celular 02",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-07",
        titulo: "Celular 02",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    {
        id: "Celular-08",
        titulo: "Celular 02",
        imagen: "./img/Celulares/A03-Core.png",
        categoria: {
            nombre: "Celulares",
            id: "Celulares"
        },
        precio: 1000
    },
    // Auriculares
    {
        id: "Auriculares-01",
        titulo: "Auriculares inalámbricos Sony WH-CH510 negro",
        imagen: "./img/Auriculares/Auriculares inalámbricos Sony WH-CH510 negro.webp",
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares"
        },
        precio: 1000
    },
    {
        id: "Auriculares-02",
        titulo: "Auriculares 02",
        imagen: "./img/Auriculares/Auriculares inalámbricos Sony WH-CH510 negro.webp",
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares"
        },
        precio: 1000
    },
    {
        id: "Auriculares-03",
        titulo: "Auriculares 03",
        imagen: "./img/Auriculares/Auriculares inalámbricos Sony WH-CH510 negro.webp",
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares"
        },
        precio: 1000
    },
    {
        id: "Auriculares-04",
        titulo: "Auriculares 04",
        imagen: "./img/Auriculares/Auriculares inalámbricos Sony WH-CH510 negro.webp",
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares"
        },
        precio: 1000
    },
    {
        id: "Auriculares-05",
        titulo: "Auriculares 05",
        imagen: "./img/Auriculares/Auriculares inalámbricos Sony WH-CH510 negro.webp",
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares"
        },
        precio: 1000
    },
    // Telvisores
    {
        id: "Televisores-01",
        titulo: "Smart TV Samsung UN32T4300AGXZD LED HD 32''",
        imagen: "./img/Televisores/Smart TV Samsung UN32T4300AGXZD LED HD 32.webp",
        categoria: {
            nombre: "Televisores",
            id: "Televisores"
        },
        precio: 1000
    },
    {
        id: "Televisores-02",
        titulo: "Tele 02",
        imagen: "./img/Televisores/Smart TV Samsung UN32T4300AGXZD LED HD 32.webp",
        categoria: {
            nombre: "Televisores",
            id: "Televisores"
        },
        precio: 1000
    },
    {
        id: "Televisores-03",
        titulo: "Tele 03",
        imagen: "./img/Televisores/Smart TV Samsung UN32T4300AGXZD LED HD 32.webp",
        categoria: {
            nombre: "Televisores",
            id: "Televisores"
        },
        precio: 1000
    },
    {
        id: "Televisores-04",
        titulo: "Tele 04",
        imagen: "./img/Televisores/Smart TV Samsung UN32T4300AGXZD LED HD 32.webp",
        categoria: {
            nombre: "Televisores",
            id: "Televisores"
        },
        precio: 1000
    },
    {
        id: "Televisores-05",
        titulo: "Tele 05",
        imagen: "./img/Televisores/Smart TV Samsung UN32T4300AGXZD LED HD 32.webp",
        categoria: {
            nombre: "Televisores",
            id: "Televisores"
        },
        precio: 1000
    },
    // Parlantes
    {
        id: "Parlantes-01",
        titulo: "Parlante Philco DJP11 con bluetooth 220V",
        imagen: "./img/Parlantes/Parlante Philco DJP11 con bluetooth 220V.webp",
        categoria: {
            nombre: "Parlantes",
            id: "Parlantes"
        },
        precio: 1000
    },
    {
        id: "Parlantes-02",
        titulo: "Parlante 02",
        imagen: "./img/Parlantes/Parlante Philco DJP11 con bluetooth 220V.webp",
        categoria: {
            nombre: "Parlantes",
            id: "Parlantes"
        },
        precio: 1000
    },
    {
        id: "Parlantes-03",
        titulo: "Parlante 03",
        imagen: "./img/Parlantes/Parlante Philco DJP11 con bluetooth 220V.webp",
        categoria: {
            nombre: "Parlantes",
            id: "Parlantes"
        },
        precio: 1000
    },
    {
        id: "Parlantes-04",
        titulo: "Parlante 04",
        imagen: "./img/Parlantes/Parlante Philco DJP11 con bluetooth 220V.webp",
        categoria: {
            nombre: "Parlantes",
            id: "Parlantes"
        },
        precio: 1000
    },
    {
        id: "Parlantes-05",
        titulo: "Parlante 05",
        imagen: "./img/Parlantes/Parlante Philco DJP11 con bluetooth 220V.webp",
        categoria: {
            nombre: "Parlantes",
            id: "Parlantes"
        },
        precio: 1000
    },







];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}