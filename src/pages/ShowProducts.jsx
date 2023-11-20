import React from 'react';

import { Grid, Paper, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';

import axios from 'axios';
import { useEffect } from 'react';

export default function ShowProducts (){

    // Styles for the components
    
    // Style for the main grid
    const mainGridStyle = { height: '100vh' }
    const paperStyle = { padding: 20, width: 800, margin: "20px auto" }

    //When loading the page, the products are obtained from the database via axios
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/products')
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    }, []);

    return (
       <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                    <h1>Mostrar productos</h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>PLU</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Peso</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                            <TableRow key={product.plu}>
                                <TableCell>{product.plu}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.weight}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Paper>
       </Grid>
    )}