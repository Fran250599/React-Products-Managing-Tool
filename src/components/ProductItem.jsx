import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductItem = ({ product }) => {
  // Estilos en línea para el componente
  const styles = {
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      backgroundColor: '#e0e0e0',
      borderRadius: '4px',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontWeight: 'bold',
    },
    price: {
      marginRight: '5px',
      color: '#333',
    },
    quantity: {
      backgroundColor: '#f0f0f0',
      padding: '2px 6px',
      borderRadius: '4px',
    },
  };

  return (
    <Card style={styles.card}>
      <CardContent style={styles.content}>
        <Typography variant="subtitle1" style={styles.name}>
          {product.name}
        </Typography>
        <div>
          <Typography variant="subtitle1" style={styles.price}>
            {`$${product.price.toFixed(2)}`}
          </Typography>
          <Typography variant="body2" style={styles.quantity}>
            {`x ${product.quantity}`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
