import React from 'react';
import ProductList from '../components/ProductList';
import BillSummary from '../components/BillSummary';

const Bill = () => {
  // Simulando datos de los productos
  const products = [
    { id: 1, name: 'Papitas Pescao', price: 5.25, quantity: 2 },
    { id: 2, name: 'Soda Gaseosa', price: 3.50, quantity: 5 }
  ];

  // Calcular el total de la factura
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Estilos en línea para el componente
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centra los elementos verticalmente
      padding: '20px', // Añade un poco de padding alrededor de la factura
      backgroundColor: '#f4f4f4', // Un color de fondo para la factura
      borderRadius: '8px', // Bordes redondeados para la factura
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Una sombra suave para la factura
      maxWidth: '800px', // Un ancho máximo si es necesario
      margin: '20px auto', // Espaciado alrededor de la factura y centrado si tiene ancho máximo
    },
    header: {
      margin: '0 0 20px 0', // Añade un margen inferior al título
      color: '#333', // Color del texto del título
      fontWeight: 'bold', // Negrita para el título
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Factura</h1>
      <ProductList products={products} />
      <BillSummary total={total} />
      {/* Aquí irían los botones de completar/cancelar si fuesen necesarios */}
    </div>
  );
};

export default Bill;
