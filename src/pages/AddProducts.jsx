import React from 'react';

import { Grid, Paper, Button, TextField} from '@mui/material';
import axios from 'axios';

export default function AddProducts (){

    // Styles for the components
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }


    // States for the components
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [stock, setStock] = React.useState('');


    const addProduct = async () => {
        const product = {name, price, quantity, description, weight, stock}
  
        console.log(product)
  
        const res = await axios.post('http://localhost:8080/products', product)
        alert("Producto añadido")
      }

    return (
       <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Añadir productos</h1>

                    <TextField style={textFieldStyle} label="Nombre del producto" placeholder="Nombre del producto" onChange={e => setName(e.target.value)}fullWidth required />
                    <TextField style={textFieldStyle} label="Precio" placeholder="Precio" onChange={e => setPrice(e.target.value)} fullWidth required />
                    <TextField style={textFieldStyle} label="Cantidad" placeholder="Cantidad" onChange={e => setQuantity(e.target.value)} fullWidth required />
                    <TextField style={textFieldStyle} label="Descripción" placeholder="Descripción" onChange={e => setDescription(e.target.value)} fullWidth required />
                    <TextField style={textFieldStyle} label="Peso" placeholder="Peso" onChange={e => setWeight(e.target.value)} fullWidth required />
                    <TextField style={textFieldStyle} label="Stock" placeholder="Stock" onChange={e => setStock(e.target.value)} fullWidth required />

                    <Button type="submit" color="primary" style={btnStyle} variant="contained" onClick={addProduct} fullWidth >Añadir producto</Button>

                </Grid>
            </Paper>
       </Grid>
    )}