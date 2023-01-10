import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
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
    fetch("http://localhost:3001/api/productos")
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
        <div className='checkbox-md'>
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="Mas detalles"
          />
        </div>
      </FormGroup>

      <NavLink className="btn-crear" to='/admin/crear'>
        <button>Crear Producto</button>
      </NavLink>
      <div className='lista-productos'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>
            <Demo>
              <List dense={dense}>

                {
                  resultado.map(resultado => (
                    <AdminList
                      id={resultado.id} /* identifica el producto */
                      nombre={resultado.nombre}
                      to={`/admin/editar/${resultado.id}`} /* Hace referencia a editar */
                      Link={''} /* Me lleva al detalle de producto */
                      detalle={resultado.descripcion}
                      secondary={secondary}
                    />

                  ))
                }

              </List>
            </Demo>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}