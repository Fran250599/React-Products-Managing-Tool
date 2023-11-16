// src/contexts/UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Crea un Context para los datos del usuario
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };
  

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
