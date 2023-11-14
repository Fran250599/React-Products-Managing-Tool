
import React from 'react';
import { useState } from 'react';

import { Grid, Paper, Avatar, TextField, Button, Typography, Autocomplete} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Form, Link } from 'react-router-dom';
import axios from 'axios';


export default function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [role, setRole] = useState('');



    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }

    const options = ['Cajero', 'Gerente', 'Administrador'];


    const addUser = async () => {
      const user = {username, password, password2, role}

      console.log(user)

      if (user.password !== user.password2) {
        alert("Las contraseñas no coinciden")
        return
      }
     
      const res = await axios.post('http://localhost:8080/users', user)
      alert("Usuario registrado")

      // Come back to the login page
      window.location.href = '/'

    }

  return (
    <>
        <Grid style={mainGridStyle}> 
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>    
                <h1>Registrarse</h1>
                </Grid>
                <TextField label="Nombre de usuario" style={textFieldStyle} placeholder="Enter username" fullWidth required onChange={e=> setUsername(e.target.value)}></TextField>
                <TextField label="Contraseña" placeholder="Enter password" type="password" fullWidth required onChange={e=> setPassword(e.target.value)}></TextField>
                <TextField label="Repite la contraseña" placeholder="Enter password" type="password" fullWidth required onChange={e=>setPassword2(e.target.value)}></TextField>
                  <Autocomplete style={textFieldStyle} options={options} onChange={(event, newValue) => {
                    setRole(newValue);
                  }}
                  renderInput={(params) => (
                  <TextField {...params} label="Choose an option" />
                  )}/>
               <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth onClick={addUser}>Registrarse</Button>

            </Paper>



        </Grid>
    </>
  );
}