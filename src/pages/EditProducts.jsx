import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button, Table, TextField, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//import EditProductsForm from './EditProductsForm'; // Assuming EditProductsForm is imported from a separate file
import { Navigate, useHref } from 'react-router-dom';

export default function EditProducts() {
    const navigate = useNavigate();
    // Styles for the components
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const textFieldStyle = { margin: '8px 0' }
    const mainGridStyle = { height: '100vh' }
    const paperStyle = { padding: 20, width: 500, margin: "20px auto" }


    // State variables
    const [TextFieldValue, setTextFieldValue] = useState('');
    //const [EditProductForm, setEditProductForm] = useState(false);

        //When loading the page, the products are obtained from the database via axios
        const [products, setProducts] = React.useState([]);
        useEffect(() => {
            axios.get('http://localhost:8080/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            });
        }, []);

    // Function to handle editing a product
    const editProduct = () => {
        // Verify that the TextField values are not empty
        if (TextFieldValue === '') {
            alert('Debe ingresar un PLU o una descripción');
            return;
        }
        
        // Search for the product in the products array
        let productIndex = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].plu === parseInt(TextFieldValue) || products[i].description === TextFieldValue) {
                productIndex = i;
                //setEditProductForm(true);
                localStorage.setItem('editProduct', JSON.stringify(products[productIndex]));
                navigate('/addProducts');


                break;
            }
        }

        // If the product was not found, alert the user and return
        if (productIndex === -1) {
            alert('Producto no encontrado');
            return;
        }

        

    };

    return (
        <Grid style={mainGridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Editar productos</h1>
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

                        <h1>Editar productos</h1>

                        <TextField style={textFieldStyle} label="PLU o Descripcion" variant="outlined" fullWidth  onChange={e => setTextFieldValue(e.target.value)}/>
                        <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth onClick={() => editProduct()}>Editar</Button>
                       
                      

                </Grid>
            </Paper>
        </Grid>
    );
}
