import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {

  return (

    /* Estadísticas de la página */

    <main className='dashboard'>

      <section className='separador-bienvenida'>
        <h1 class="panel-admin">#BIENVENIDO NUEVAMENTE<span class="span-color"> ADMINISTRADOR</span></h1>
      </section>  

      <section className='separador-e'>
        <h1 class="panel-admin">#ESTADÍSTICAS DE LA<span class="span-color"> PÁGINA</span></h1>
      </section>

      <section className="statiks">
        <div className="box-statiks">
          <i className="far fa-eye"></i>
          <h3>5,154</h3>
          <p className="lead">Visitas a la Web</p>
        </div>
        <div className="box-statiks">
          <i className="far fa-user"></i>
          <h3>245</h3>
          <p className="lead">Usuarios Registrados</p>
        </div>
        <div className="box-statiks">
          <i className="fas fa-shopping-cart"></i>
          <h3>5,154</h3>
          <p className="lead">Cantidad de Productos</p>
        </div>
        <div className="box-statiks">
          <i className="far fa-envelope"></i>
          <h3>5,154</h3>
          <p className="lead">Mensajes</p>
        </div>
      </section>

      {/* Administración de la página */}

      <section className='separador-e'>
        <h1 class="panel-admin">#ADMINISTRACIÓN DE LA<span class="span-color"> PÁGINA</span></h1>
      </section>

      <div class="container_all">
        <div class="container_box">

          <div class="box">
            <NavLink to='/admin/productos'>
              <i className="fas fa-shopping-cart icon"></i>
              <h4>Productos</h4>
              <p>Lista de productos </p>
              <div class="background_hover"> </div>
            </NavLink>
          </div>

          <div class="box">
            <NavLink to='/admin/usuarios'>
              <i className="fas fa-users icon"></i>
              <h4>Usuarios</h4>
              <p>Lista de usuarios </p>
              <div class="background_hover"> </div>
            </NavLink>
          </div>

          <div class="box">
            <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>
              <i className="fas fa-envelope icon"></i>
              <h4>Mensajes</h4>
              <p>Mensajes en la db </p>
              <div class="background_hover"> </div>
            </a>
          </div>

          {/*  <div class="box">
            <i class="fab fa-github icon"></i>
            <h4>GitHub</h4>
            <p>Lorem Ipsum is simply dummy text </p>
            <div class="background_hover"> </div>
          </div>

          <div class="box">
            <i class="fab fa-gitlab icon"></i>
            <h4>GitLab</h4>
            <p>Lorem Ipsum is simply dummy text </p>
            <div class="background_hover"> </div>
          </div>

          <div class="box">
            <i class="fab fa-linkedin-in icon"></i>
            <h4>Linkedin</h4>
            <p>Lorem Ipsum is simply dummy text </p>
            <div class="background_hover"> </div>
          </div> */}

        </div>
      </div>


    </main>
  )
}

export default Admin