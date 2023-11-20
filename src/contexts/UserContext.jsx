import { createContext, useState, useContext } from 'react';
//Crear el context
const defaultUser = {
  username: null, password: null, role: null
};
export const UserContext = createContext(defaultUser);



//----------------------------------------------------------------
//Provider
export const UserProvider = ({ children }) => {
  // Estado inicial del usuario, donde user es null si nadie está logueado.
  const [user, setUser] = useState({ username: null, password: null, role: null });

  // Función para simular el inicio de sesión
  const login = (userData) => {
    // Establecemos el estado del usuario con los datos obtenidos
    setUser({
      username: userData.username, 
      role: userData.role
      // No se debe guardar la contraseña en el estado
    });
  }
  // Función para cerrar sesión
  const logout = () => {
    // Restablecer el estado del usuario a sus valores iniciales
    setUser({ username: null, password: null, role: null });
  };

  // El valor que el contexto proveerá a los componentes
  const contextValue = {
    user,
    login,
    logout
  };
  console.log('UserProvider contextValue:', contextValue);
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
  
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
