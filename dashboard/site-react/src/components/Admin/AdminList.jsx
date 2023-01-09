import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Swal from 'sweetalert2';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default function InteractiveList(props) {

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estas seguro de querer eliminar este producto?',
            text: "Esta accion es Irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3001/api/eliminar/${props.id}`)
                .then(productoEliminado => {
                    Swal.fire(
                        'Producto eliminado!',
                        `${props.nombre}.`,
                        'success'
                    )
                    window.location.reload(true);
                })
            }
        })
    }

    return (

        <ListItem
            secondaryAction={ 
                <div className='divIcons'>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <NavLink to={props.to}>
                <IconButton edge="end" aria-label="delete" >
                    <BorderColorIcon />
                </IconButton>
                </NavLink>
                </div> 
            }
        >
            <NavLink to={props.link}>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.nombre}
                secondary={props.secondary ? props.detalle : null}
            />
            </NavLink>
        </ListItem>

    );
}