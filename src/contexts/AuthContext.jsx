import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    let result = "";
    try {
      const response = await fetch(`http://localhost:3000/users?email=${credentials.email}`);
      const users = await response.json();
      console.log("users", users);
      const user = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (!user) {
        setLoading(false);
        return result = "Usuario y contraseña incorrectas";
      }

      localStorage.setItem("token", user.token);
      setIsLoggedIn(true);
    } catch (err) {
      result = err.message;
    } finally {
      setLoading(false);
      return result;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
