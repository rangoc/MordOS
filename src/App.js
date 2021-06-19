import React, { useContext } from 'react';
// components
import Authentication from 'components/auth/Authentication';
import UserInterface from 'components/ui/UserInterface';

// context
import { AuthContext } from 'context/AuthProvider';

// sass
import './app.scss';
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="app">
      {isAuthenticated ? <UserInterface /> : <Authentication />}
    </div>
  );
};

export default App;
