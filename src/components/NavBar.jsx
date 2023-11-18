import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext, useUserContext } from '../contexts/UserContext';

const NavBar = () => {
  // Llama al hook useUserContext en el nivel más alto del componente.
  const { user } = useUserContext();

  // Usa useEffect para manejar los efectos secundarios relacionados con el montaje y desmontaje del componente.
  useEffect(() => {
    console.log("NavBar: Mounted.");
    // No debes llamar a useUserContext() aquí; utiliza el valor ya obtenido de 'user'.
    console.log("UserContext value:", user);
    return () => {
      console.log("NavBar: Unmounted.");
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar y desmontar.


  const styles = {
    appBar: {
      backgroundColor: '#061F27', // Dark background color as shown in the image
      color: '#FFF' // White text color
    },
    link: {
      color: '#FFF',
      textDecoration: 'none',
      margin: '0 10px', // Spacing between buttons
    },
    userSection: {
      marginLeft: 'auto', // Pushes the user section to the right
    },
    iconButton: {
      color: '#FFF', // Icon color
    },
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        {/* ... tus links y botones ... */}
      </Toolbar>
      {/* Sección del widget de usuario */}
      <div style={styles.userSection}>
        {user.username !== null ? (
          <>
            <IconButton style={styles.iconButton}>
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6" component="p">
              {user.username}
            </Typography>
            <Link to="/logout" style={styles.link}>
              <Button color="inherit">Logout</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/register" style={styles.link}>
              <Button color="inherit">Register</Button>
            </Link>
          </>
        )}
      </div>
    </AppBar>
  );
};


export default NavBar;
