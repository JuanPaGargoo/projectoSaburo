// filepath: c:\Users\juanp\Documents\workspace\projectoSaburo\src\context\AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [refreshNavbar, setRefreshNavbar] = useState(false); // Nuevo estado

  const triggerNavbarRefresh = () => setRefreshNavbar((prev) => !prev); // Cambia el estado

  return (
    <AuthContext.Provider value={{ user, setUser, refreshNavbar, triggerNavbarRefresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}