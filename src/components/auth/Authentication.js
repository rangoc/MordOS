import React, { useContext } from 'react';

// context
import { AuthContext } from 'context/AuthProvider';

// constants
import { validCredentials } from 'constants/validCredentials';

// assets
import logo from 'assets/logo.svg';

// sass
import './authentication.scss';

const Authentication = () => {
  const { formValues, setIsAuthenticated, handleChange } =
    useContext(AuthContext);
  const { email, password } = formValues;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      console.log('Invalid credentials');
    }
  };
  return (
    <div className="auth">
      <div className="authForm">
        <div className="authForm-header">
          <div className="authForm-subheader">
            <h1 className="title">MORD</h1>
            <div className="logoWrapper">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <p className="description">One operating system to rule them all</p>
        </div>
        <form onSubmit={onSubmit} className="authForm-fields">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="true"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
