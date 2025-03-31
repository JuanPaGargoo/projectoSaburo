// filepath: c:\Users\juanp\Documents\workspace\projectoSaburo\src\context\AuthContext.jsx
import { createContext, useState, useContext } from "react";

// Crea el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);