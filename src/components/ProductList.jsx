import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  // Estilos en línea para el contenedor de la lista de productos
  const styles = {
    listContainer: {
      padding: '10px', // Añade un poco de padding alrededor de los elementos de la lista
      margin: '10px 0', // Agrega espacio antes y después de la lista
      backgroundColor: '#f8f8f8', // Un color de fondo suave para distinguir la lista del fondo
      borderRadius: '4px', // Bordes redondeados para la lista
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Una sombra ligera para dar profundidad
      maxWidth: '600px', // Un ancho máximo para la lista si es necesario
      margin: 'auto', // Centra la lista si tiene un ancho máximo
    }
  };

  return (
    <div style={styles.listContainer}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
