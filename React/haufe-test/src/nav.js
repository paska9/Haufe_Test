import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Login from './Login';

function Nav() {

    const navStyle = {
        color:'white'
    };


  return (
      <nav>
          <ul className="nav-links">
              <Link style={navStyle} to="/">
                <li>Home</li>
              </Link>
              <Link style={navStyle} to="/login">
                <li>Login</li>
              </Link>
              <Link style={navStyle} to="/register">
                <li>Register</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
