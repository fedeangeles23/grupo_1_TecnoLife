import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AdminList from './AdminList'
import { NavLink } from 'react-router-dom';

/* function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
} */

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [resultado, setresultado] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((valores) => {
        setresultado(valores.data);
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      })
      .catch(error => console.log(error))
  }, [loading])
  console.log(resultado);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        {/* <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        /> */}
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Mas detalles"
        />
      </FormGroup>

      <NavLink className="btn-crear" to= '/registro'>
        <button>Registrar Usuario</button>
      </NavLink>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Usuarios Registrados
          </Typography>
          <Demo>
            <List dense={dense}>

              {
                resultado.map(resultado => (
                  <AdminList
                    id={resultado.id} /* identifica el producto */
                    nombre={resultado.first_name + ' ' + resultado.last_name} /* Concatenado */
                    to={`/admin/editar/${resultado.id}`} /* Hace referencia a editar */
                    Link={''} 
                    detalle={
                        <div>
                            <p>Email: {resultado.email}</p>
                            <p>Ciudad: {resultado.ciudad}</p>
                            <p>Dirección: {resultado.direccion === null ? "No hay información" : resultado.direccion }</p>
                            <p>Código Postal: {resultado.codigopostal === null ? "No hay información" : resultado.codigopostal }</p>
                            <p>Rol: {resultado.rol}</p>
                        </div>
                    }
                    secondary={secondary}
                  />

                ))
              }

            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}