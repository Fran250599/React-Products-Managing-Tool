import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import axios from 'axios';

export default function BuyProducts() {
  const btnStyle = { margin: '8px 0' };
  const mainGridStyle = { height: '100vh' };
  const paperStyle = { padding: 20, width: 800, margin: '20px auto' };

  const [products, setProducts] = useState([]);
  const [productsToBuy, setProductsToBuy] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleQuantityChange = (event, productPLU) => {
    const { value } = event.target;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productPLU]: value !== '' ? parseInt(value, 10) : '',
    }));
  };

  const addProductToList = (product) => {
    const quantity = quantities[product.plu] || 0;

    if (quantity <= 0) {
      alert('La cantidad debe ser mayor a 0');
      return;
    }
    if (quantity > product.stock) {
      alert('La cantidad debe ser menor o igual al stock');
      return;
    }

    const newProduct = {
      plu: product.plu,
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      weight: product.weight,
      quantity: quantity,
    };

    setProductsToBuy([...productsToBuy, newProduct]);
    setTotalPrice(totalPrice + product.price * quantity);
  };

  const buyProductsInList = () => {
    productsToBuy.forEach((product) => {
      buyProduct(product);
    });
    setProductsToBuy([]);
    setTotalPrice(0);
    alert('Productos comprados');
  };

  const buyProduct = (product) => {
    const quantity = product.quantity;

    axios
      .put(`http://localhost:8080/products/${product.plu}`, {
        ...product,
        stock: product.stock - quantity,
      })
      .then((response) => {
        console.log(response);
      });
  };

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
                    <input
                      type="number"
                      id={`quantityToBuy_${product.plu}`}
                      name={`quantityToBuy_${product.plu}`}
                      min="1"
                      max={product.stock}
                      onChange={(event) =>
                        handleQuantityChange(event, product.plu)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      onClick={() => addProductToList(product)}
                    >
                      Añadir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>

      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>Productos a comprar</h1>

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
        {productsToBuy.map((product) => (
          <TableRow key={product.plu}>
            <TableCell>{product.plu}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell> {/* Display quantity to buy */}
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.weight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
          <h2>Total: {totalPrice}</h2>
          {productsToBuy.length > 0 && (
            <Button
              type="button"
              color="primary"
              variant="contained"
              onClick={buyProductsInList}
            >
              Comprar Productos
            </Button>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
}
