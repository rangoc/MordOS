import React, { useContext } from 'react';
// components
import Authentication from 'components/auth/Authentication';
import UserInterface from 'components/ui/UserInterface';

// context
import { WindowProvider } from 'context/WindowProvider';
import { AuthContext } from 'context/AuthProvider';

// sass
import './app.scss';
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="app">
      {/* {isAuthenticated ? (
        <WindowProvider>
          <UserInterface />
        </WindowProvider>
      ) : (
        <Authentication />
      )} */}
      <WindowProvider>
        <UserInterface />
      </WindowProvider>
    </div>
  );
};

export default App;
