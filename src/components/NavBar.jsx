import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
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

  const { logout } = useUserContext();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout(); // Esto llamará a la función logout de tu UserProvider
    navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
  };


  const styles = {
    appBar: {
      position: 'fixed', // This makes the navbar stick to the top
      top: 0, // This ensures there is no gap at the top of the page
      width: '100%', // This makes the navbar stretch across the full width
      backgroundColor: '#061F27',
      color: '#FFF',
      zIndex: 1100, // Ensures the navbar is above other content
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between', // This will align the navigation and user sections on opposite ends
    },
    navLinks: {
      display: 'flex', // Aligns the links in a row
    },
    link: {
      color: '#FFF',
      textDecoration: 'none',
      margin: '0 10px',
    },
    userSection: {
      display: 'flex', // Aligns the user items in a row
      alignItems: 'center', // Centers the items vertically
    },
    iconButton: {
      color: '#FFF',
    },
  };

  const menuItems = [
    {
      label: "Realizar Venta",
      path: "/realizarVenta",
      roles: ["Cajero", "Administrador"],
    },
    {
      label: "Consultar Producto",
      path: "/consultarProducto",
      roles: ["Cajero", "Administrador"],
    },
    {
      label: "Gestionar Productos",
      path: "/showProducts",
      roles: ["Gerente", "Administrador"],
    },
    {
      label: "Reporte Ventas",
      path: "/reporteVentas",
      roles: ["Administrador"],
    },
    {
      label: "Bitácoras",
      path: "/bitacoras",
      roles: ["Administrador"],
    },
    {
        label: "Bill",
        path: "/bill",
        roles: ["Administrador"],
      },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    const role = user.role;
    return item.roles.includes(role);
  });

  return (
    <AppBar style={styles.appBar}>
      <Toolbar style={styles.toolBar}>
        <div style={styles.navLinks}>        
            {filteredMenuItems.map((item) => (
                <Link to={item.path} style={styles.link}>
                <Button color="inherit">
                    {item.label}
                </Button>
                </Link>
            ))}
        </div>
        
        <div style={styles.userSection}>
        {user.username !== null ? (
          <>
            <IconButton style={styles.iconButton}>
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="h6" component="p">
              {user.username}
            </Typography>
            <Button color="inherit" onClick={handleLogout} style={styles.link}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/signup" style={styles.link}>
              <Button color="inherit">Register</Button>
            </Link>
          </>
        )}
        </div>
      </Toolbar>
    </AppBar>
    );
  };


export default NavBar;
