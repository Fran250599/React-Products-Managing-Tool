import React from 'react';
import { Grid, Paper } from '@mui/material';

const HomePage = () => {
    // Styles for the components
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" };
    const mainGridStyle = { height: '100vh' };

    // Imprime en consola cada vez que el componente se monta
    console.log("Llamando HomePage");

    return (
        <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Bienvenido!</h1>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default HomePage;
