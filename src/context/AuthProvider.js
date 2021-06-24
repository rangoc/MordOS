import React, { useState, createContext } from 'react';

const AuthContext = createContext({
  email: '',
  password: '',
  isAuthenticated: false,
});

const AuthProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('user')
  );
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <AuthContext.Provider
      value={{
        formValues,
        isAuthenticated,
        setIsAuthenticated,
        setFormValues,
        handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
