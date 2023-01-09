import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {

  return (
    <main className='Dashboard'>
      <section className="statis">
        <div className="box">
          <i className="far fa-eye"></i>
          <h3>5,154</h3>
          <p className="lead">Visitas a la Web</p>
        </div>
        <div className="box">
          <i className="far fa-user"></i>
          <h3>245</h3>
          <p className="lead">Usuarios Registrados</p>
        </div>
        <div className="box">
          <i className="fas fa-shopping-cart"></i>
          <h3>5,154</h3>
          <p className="lead">Cantidad de Productos</p>
        </div>
        <div className="box">
          <i className="far fa-envelope"></i>
          <h3>5,154</h3>
          <p className="lead">Mensajes</p>
        </div>
      </section>
      <section className='separador'>
        <h3>ADMINISTRACION</h3>
        <p>administrar de forma sencilla tu propia pagina</p>
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
            <NavLink>
              <i className="fas fa-users icon"></i>
              <h4>Usuarios</h4>
              <p>Lista de usuarios </p>
              <div class="background_hover"> </div>
            </NavLink>
          </div>

          <div class="box">
            <NavLink>
              <i className="fas fa-envelope icon"></i>
              <h4>Mensajes</h4>
              <p>Mensajes en la db </p>
              <div class="background_hover"> </div>
            </NavLink>
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