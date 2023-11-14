import React from 'react';

import { Grid, Paper, Button } from '@mui/material';

export default function AddProducts (){

    // Styles for the components
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }

    return (
       <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Mostrar productos</h1>
                </Grid>
            </Paper>
       </Grid>
    )}