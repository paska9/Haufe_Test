
import React from 'react';
import './App.css';
import Axios from 'axios'
import {Link} from 'react-router-dom';


function User() {
  let mess = "";
  
  let ID = localStorage.getItem('ID');
  let Role = localStorage.getItem('Role');
  

  function getUserdate() {
    const url = 'http://localhost:4000/getUsers';

    const user = {
        ID: ID
    }

    Axios.get(url, user).then((res) => {
            console.log('Executed Succesfull');
            console.log(res.data.users);
            let usersdata =  res.data.users;
    }).catch((e) => {
        console.log("error");
    });
  }


  if (Role == 'external'){
      mess = "External role don't see all users";
  } else  {
      getUserdate();
  }

  console.log(ID);
  console.log(Role);
    return (
        <div>
          <h2>User Page</h2>
          <h6 style={{marginTop: -20}}>({Role})</h6>
          <h2>{mess}</h2>
          <div>
            {usersdata.map(name => (
              <li>
                {name}
              </li>
            ))}
          </div>
        </div>
    );
  }


export default User;
