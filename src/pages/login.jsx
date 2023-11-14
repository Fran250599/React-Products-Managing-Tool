
import React from 'react';

import { Link } from 'react-router-dom';

import { Grid, Paper, Avatar, TextField, Button, Typography} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


export default function Login() {

    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }
  return (
    <>
        <Grid style={mainGridStyle}> 
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>    
                <h1>Iniciar sesión</h1>
                </Grid>
                <TextField label="Nombre de usuario" style={textFieldStyle} placeholder="Enter username" fullWidth required></TextField>
                <TextField label="Contraseña" placeholder="Enter password" type="password" fullWidth required></TextField>

                <Link to="/home">
               <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth>Iniciar sesión</Button>
               </Link>

                <Typography> No tienes una cuenta?    
                        <Link to="/signup">Registrarse</Link>
                </Typography>

            </Paper>



        </Grid>
    </>
  );
}