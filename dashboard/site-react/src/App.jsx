import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* Sección del Header */
import Header from './components/Header';
import Registro from './components/usuarios/Registro';
import IniciarSesion from './components/usuarios/IniciarSesion';

import Main from './components/Main';

/* ADMIN */
import Admin from "./components/Admin/Admin";
import Usuarios from "./components/Admin/Usuarios"
import ListaProductos from "./components/Admin/ListaProductos";
import Editar from "./components/Admin/Editar";
import Crear from "./components/Admin/Crear";


/* Sección del Footer */
import Footer from './components/footer/Footer';
import Contactanos from './components/footer/Contactanos'
import PoliticaYPrivacidad from './components/footer/PoliticaYPrivacidad'
import PreguntasFrecuentes from './components/footer/PreguntasFrecuentes'
import SobreNosotros from './components/footer/SobreNosotros'
import TerminosYCondiciones from './components/footer/TerminosYCondiciones'
import TrabajaConNosotros from './components/footer/TrabajaConNosotros'

/* Estilos Globales */
import './styles/style.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Renderización del Home */}
          <Route path='/' element={<Main />} />

          {/* Renderización del Registro e Iniciar Sesión */}
          <Route path='/registro' element={<Registro />}/>
          <Route path='/iniciar-sesion' element={<IniciarSesion />}/>
          
          {/* Renderización de los elementos del Footer */}
          <Route path='/contactanos' element={<Contactanos />}/>
          <Route path='/politica-y-privacidad' element={<PoliticaYPrivacidad />}/>
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />}/>
          <Route path='/sobre-nosotros' element={<SobreNosotros />}/>
          <Route path='/terminos-y-condiciones' element={<TerminosYCondiciones />}/>
          <Route path='/trabaja-con-nostros' element={<TrabajaConNosotros />}/>

          {/* Admin */}
          <Route path='/admin' element={<Admin />}/>

                <Route path='/admin/usuarios' element={<Usuarios />}/>
                <Route path='/admin/productos' element={<ListaProductos />}/>
                <Route path='/admin/editar/:id' element={<Editar />}/>
                <Route path='/admin/crear' element={<Crear />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
