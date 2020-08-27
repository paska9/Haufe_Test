import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Register() {


  return (
      <div>
        <h2>Register Page</h2>
        <form>
            <label>Username</label>
            <input type='text' name='username'></input><br/>
            <label>Password</label>
            <input type='password' name='password'></input><br/>
            <label>Confirm Password</label>
            <input type='password' name='password1'></input><br/>
            <input type="submit" value="Register"/>
            {/* <Link to="/users">
                Register
              </Link> */}
        </form>
      </div>
  );
}

export default Register;
