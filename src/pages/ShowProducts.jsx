import React from 'react';

import { Grid, Paper, Table } from '@mui/material';

import axios from 'axios';
import { useEffect } from 'react';

export default function AddProducts (){

    // Styles for the components
    
    // Style for the main grid
    const mainGridStyle = { height: '100vh' }
    const paperStyle = { padding: 20, width: 500, margin: "20px auto" }

    //When loading the page, the products are obtained from the database via axios
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/products')
        .then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
       <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                    <h1>Mostrar productos</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Peso</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.weight}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Grid>
            </Paper>
       </Grid>
    )}