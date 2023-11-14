
import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';


export default function Login() {

    // Styles for the components
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }

    // States for the components
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to login
    const login = async () => {
      const user = {username, password}
      console.log(user)
      // GET function to search for the user
      const res = await axios.post('http://localhost:8080/users/login', user)

      console.log(res)

      if (res.status === 401) {
        alert("Contraseña incorrecta")
        return
      } else if (res.status === 404) {
        alert("Usuario no encontrado")
        return
      } else{
        alert("Bienvenido")
      
        // Come back to the home page
        window.location.href = '/home'
      }

    }

    
  return (
    <>
        <Grid style={mainGridStyle}> 
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>    
                <h1>Iniciar sesión</h1>
                </Grid>
                <TextField label="Nombre de usuario" onChange={e=> setUsername(e.target.value)} style={textFieldStyle} placeholder="Enter username" fullWidth required></TextField>
                <TextField label="Contraseña" onChange={e=> setPassword(e.target.value)} placeholder="Enter password" type="password" fullWidth required></TextField>

           
               <Button type="submit" color="primary" onClick={login} style={btnStyle} variant="contained" fullWidth>Iniciar sesión</Button>

                <Typography> No tienes una cuenta?    
                        <Link to="/signup">Registrarse</Link>
                </Typography>
            </Paper>
        </Grid>
    </>
  );
}