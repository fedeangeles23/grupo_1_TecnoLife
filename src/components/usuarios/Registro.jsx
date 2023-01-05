import React from 'react'

function Registro() {
    return (

        <body class="register">

            <main>
                <h1 class="mb-2">Crear cuenta</h1>
                <form action="" method="post">
                    <div class="container bottom">
                        <label for="name">Nombre y apellido</label>
                        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre y apellido"/>
                    </div>
                    <div class="container bottom">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Ingresa tu email"/>
                    </div>
                    <div class="container bottom">
                        <label for="pass1">Contraseña</label>
                        <div class="password">
                            <input type="password" name="pass" id="pass" placeholder="Ingresa tu contraseña" />
                        </div>
                    </div>
                    <div class="container bottom">
                        <label for="pass2">Repita Su Contraseña</label>
                        <div class="password">
                            <input type="password" name="pass2" id="pass2" placeholder="Confirme su contraseña" />
                        </div>
                    </div>
                    <div class="button">
                        <button class="spacing">REGISTRARSE</button>
                        <p>¿Ya tenés creada una cuenta?</p>
                        <p><a class="link" href="/iniciar-sesion">Inicia sesión aquí</a></p>
                    </div>
                </form>
            </main>

        </body>
    )
}

export default Registro