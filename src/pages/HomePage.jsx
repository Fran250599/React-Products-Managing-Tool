import React from 'react';

import { Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage (){

    // Styles for the components
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const btnStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }

    const userRole = localStorage.getItem('role')

    if (userRole === 'Administrador') {
        return (
            <Grid style={mainGridStyle}>
                 <Paper elevation={10} style={paperStyle}>
                     <Grid align="center">
                     <h1>Bienvenido!</h1>
                     <Link to="/buyProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Comprar productos</Button>
                     </Link>
                     <Link to="/addProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Agregar productos</Button>
                     </Link>
                     <Link to="/showProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Ver productos</Button>
                     </Link>
                     
                    <Link to="/editProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Editar productos</Button>
                    </Link>
     
                     </Grid>
                 </Paper>
            </Grid>
         )
    }

    if(userRole === 'Gerente') {
        // Everything except add products
        return (
            <Grid style={mainGridStyle}>
                 <Paper elevation={10} style={paperStyle}>
                     <Grid align="center">
                     <h1>Bienvenido!</h1>
                     <Link to="/buyProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Comprar productos</Button>
                     </Link>
                     <Link to="/showProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Ver productos</Button>
                     </Link>
                     
                    <Link to="/editProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Editar productos</Button>
                    </Link>
                     </Grid>
                 </Paper>
            </Grid>
         )
    }

    if (userRole === 'Cajero') {
    
        return (
            <Grid style={mainGridStyle}>
                 <Paper elevation={10} style={paperStyle}>
                     <Grid align="center">
                     <h1>Bienvenido!</h1>
                     <Link to="/buyProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Comprar productos</Button>
                     </Link>
                     <Link to="/showProducts">
                     <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth >Ver productos</Button>
                     </Link>
                     </Grid>
                 </Paper>
            </Grid>
         )
    
    }

}