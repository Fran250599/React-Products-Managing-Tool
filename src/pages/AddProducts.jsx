import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button, TextField } from '@mui/material';
import axios from 'axios';

export default function AddProducts() {
    // Styles for the components
    const paperStyle = { padding: 20, width: 300, margin: "20px auto" };
    const btnStyle = { margin: '8px 0' };
    const textFieldStyle = { margin: '8px 0' };
    const mainGridStyle = { height: '100vh' };

    // State for the product fields
    const [product, setProduct] = useState(() => {
        // Try to load the product from local storage
        const savedProduct = localStorage.getItem('editProduct');
        return savedProduct ? JSON.parse(savedProduct) : {
            name: '',
            price: '',
            stock: '',
            description: '',
            weight: '',
            plu: '' // Add this if you need to track the PLU for edits
        };
    });

    // Effect to clear the product from local storage once it has been loaded
    useEffect(() => {
        localStorage.removeItem('editProduct'); // Clear the product from local storage
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product.plu) {
                // If in edit mode, send a PUT request to update the product
                const response = await axios.put(`http://localhost:8080/products/${product.plu}`, product);
                console.log(response.data);
                alert("Producto actualizado");
            } else {
                // If in add mode, send a POST request to add a new product
                const response = await axios.post('http://localhost:8080/products', product);
                console.log(response.data);
                alert("Producto añadido");
            }
            // Reset form
            setProduct({
                name: '',
                price: '',
                stock: '',
                description: '',
                weight: '',
                plu: ''
            });
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <Grid style={mainGridStyle} container justifyContent="center" alignItems="center">
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <h2>{product.plu ? "Editar Producto" : "Añadir Producto"}</h2>
                        </Grid>
                        <Grid item>
                            <TextField
                                style={textFieldStyle}
                                label="Nombre del producto"
                                placeholder="Nombre del producto"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={textFieldStyle}
                                label="Precio"
                                placeholder="Precio"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={textFieldStyle}
                                label="Cantidad en stock"
                                placeholder="Cantidad en stock"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={textFieldStyle}
                                label="Descripción"
                                placeholder="Descripción"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={textFieldStyle}
                                label="Peso"
                                placeholder="Peso"
                                name="weight"
                                value={product.weight}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        {product.plu && (
                            <Grid item>
                                <TextField
                                    style={textFieldStyle}
                                    label="PLU"
                                    placeholder="PLU"
                                    name="plu"
                                    value={product.plu}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                        )}
                        <Grid item>
                            <Button
                                type="submit"
                                color="primary"
                                style={btnStyle}
                                variant="contained"
                                fullWidth
                            >
                                {product.plu ? "Actualizar Producto" : "Añadir Producto"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
    
}
