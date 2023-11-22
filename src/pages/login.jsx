import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useUserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login: contextLogin } = useUserContext();
  
  // Styles for the components
  const paperStyle = { padding: 20, width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };
  const textFieldStyle = { margin: '8px 0' };
  const mainGridStyle = { height: '100vh' };

  // States for the components
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to login
  const login = async () => {
    console.log("Trying to login...");
    const userCredentials = { username, password };
    try {
      const res = await axios.post('http://localhost:8080/users/login', userCredentials);
      console.log(res.status);
      if (res.status === 200) {
        const loggedInUserData = res.data;
        
        // Actualiza el contexto del usuario con los datos recibidos
        // Asegúrate de no incluir la contraseña
        contextLogin({
          plu: loggedInUserData.PLU,
          username: loggedInUserData.username,
          // Supongamos que la respuesta debería incluir el rol del usuario, aquí es null
          role: loggedInUserData.role
        });

        // Usa navigate para redirigir a la página de inicio
        navigate('/');
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
    <Grid style={mainGridStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockIcon /></Avatar>
          <h1>Iniciar sesión</h1>
        </Grid>
        <TextField
          label="Nombre de usuario"
          onChange={e => setUsername(e.target.value)}
          style={textFieldStyle}
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Contraseña"
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          onClick={login}
          style={btnStyle}
          variant="contained"
          fullWidth
        >
          Iniciar sesión
        </Button>
        <Typography>
          ¿No tienes una cuenta?
          <Link to="/signup">Registrarse</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
