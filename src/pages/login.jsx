
import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useUserContext } from '../contexts/UserContext';



export default function Login() {
    const { login: contextLogin } = useUserContext();
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
      const userCredentials = { username, password };
      try {
        const res = await axios.post('http://localhost:8080/users/login', userCredentials);
        
        if (res.status === 200) {
          // Si el inicio de sesión es exitoso, actualiza el contexto del usuario
          contextLogin(res.data); // Asumiendo que res.data contiene los datos del usuario
          
          // Redirige a la página de inicio
          window.location.href = '/';
        } else {
          // Manejar otros estados de respuesta aquí
        }
      } catch (error) {
        if (error.response) {
          // Error responses from the server
          if (error.response.status === 401) {
            alert("Contraseña incorrecta");
          } else if (error.response.status === 404) {
            alert("Usuario no encontrado");
          }
        } else {
          // Other errors
          console.error("Login error", error);
        }
      }
    };

    
  return (
    <>

        {/* All this layout was made with help of Material UI - https://mui.com/ */ }
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