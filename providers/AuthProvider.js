import React, { createContext, useState, useEffect } from 'react';
import { getToken, saveToken, removeToken } from '../services/storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    const token = await getToken();
    setUserToken(token);
    setLoading(false);
  };

  const login = async (token) => {
    await saveToken(token);
    setUserToken(token);
  };

  const logout = async () => {
    await removeToken();
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
