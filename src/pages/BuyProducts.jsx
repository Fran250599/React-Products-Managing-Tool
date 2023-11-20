import React from 'react';

import { Grid, Paper, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import { useEffect, useState} from 'react';
import axios from 'axios';

export default function BuyProducts (){


    // Styles for the components
    const btnStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }
    const paperStyle = { padding: 20, width: 800, margin: "20px auto" }


    //When loading the page, the products are obtained from the database via axios
     const [products, setProducts] = React.useState([]);
     
     useEffect(() => {
         axios.get('http://localhost:8080/products')
         .then((response) => {
             setProducts(response.data);
         });
     }, []);

     const buyProduct = (product) => {
     
        console.log(product);
    }



   

    return (
       <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Comprar productos</h1>

                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>PLU</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Peso</TableCell>
                            <TableCell>Cantidad a comprar</TableCell>
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
                                <TableCell>
                                <input type="number" min="1" max={product.stock} defaultValue="1" />
                                </TableCell>
                                <TableCell>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={() => buyProduct(product)}
                                >
                                    Comprar
                                </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Paper>
       </Grid>
    )}