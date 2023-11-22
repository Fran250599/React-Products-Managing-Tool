import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BillSummary = ({ total }) => {
  // Estilos en línea para el componente
  const styles = {
    card: {
      marginBottom: '10px',
      backgroundColor: '#e0e0e0', // Color de fondo del resumen
      borderRadius: '4px',
      boxShadow: 'none', // Sin sombra para mantener la consistencia con ProductItem
    },
    content: {
      padding: '10px', // Alineado con el estilo de ProductItem
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.2rem', // Tamaño de fuente para el título
      marginBottom: '5px', // Espacio debajo del título
    },
    total: {
      fontWeight: 'bold',
      fontSize: '1.5rem', // Tamaño de fuente para el total
      color: '#333', // Color de texto para el total
    },
  };

  return (
    <Card style={styles.card}>
      <CardContent style={styles.content}>
        <Typography variant="h6" style={styles.title}>
          Total Venta
        </Typography>
        <Typography variant="h4" style={styles.total}>
          {`$${total.toFixed(2)}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BillSummary;
