import React from 'react';

import { Grid, Paper, Table } from '@mui/material';

export default function AddProducts (){

    // Styles for the components
    
    // Style for the main grid
    const mainGridStyle = { height: '100vh' }
    const paperStyle = { padding: 20, width: 500, margin: "20px auto" }

    // Dummy array of products with the next structure: id, name, price, description, weight, stock
    const products = [
        {
            id: 1,
            name: "Producto 1",
            price: 100,
            description: "Descripción del producto 1",
            weight: 1,
            stock: 10
        },
        {
            id: 2,
            name: "Producto 2",
            price: 200,
            description: "Descripción del producto 2",
            weight: 2,
            stock: 20
        },
        {
            id: 3,
            name: "Producto 3",
            price: 300,
            description: "Descripción del producto 3",
            weight: 3,
            stock: 30
        },
        {
            id: 4,
            name: "Producto 4",
            price: 400,
            description: "Descripción del producto 4",
            weight: 4,
            stock: 40
        },
        {
            id: 5,
            name: "Producto 5",
            price: 500,
            description: "Descripción del producto 5",
            weight: 5,
            stock: 50
        }
    ]

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