import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {TextInput } from 'react';

function Login() {

  return (
      <div>
        <h2>Login Page</h2>
        <form>
            <label>Username</label>
            <input type='text' name='username' values='username'></input><br/>
            <label>Password</label>
            <input type='password' name='password' values='password'></input><br/>
            <input type="submit" value="Login" />
        </form>
        


      </div>
  );
}

export default Login;
