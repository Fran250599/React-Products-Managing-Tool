
import React from 'react';

import { Grid, Paper, Avatar, TextField, Button, Typography, Autocomplete} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';


export default function SignUp() {

    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }

    const options = ['Cajero', 'Gerente', 'Administrador'];
  return (
    <>
        <Grid style={mainGridStyle}> 
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>    
                <h1>Registrarse</h1>
                </Grid>
                <TextField label="Nombre de usuario" style={textFieldStyle} placeholder="Enter username" fullWidth required></TextField>
                <TextField label="Contraseña" placeholder="Enter password" type="password" fullWidth required></TextField>
                <TextField label="Repite la contraseña" placeholder="Enter password" type="password" fullWidth required></TextField>
                <Autocomplete style={textFieldStyle}
                 options={options}
                renderInput={(params) => (
                <TextField {...params} label="Choose an option" />
                )}
/>
                <Link to="/">
               <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth>Registrarse</Button>
               </Link>
            </Paper>



        </Grid>
    </>
  );
}