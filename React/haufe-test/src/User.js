import React from 'react';
import Axios from 'axios'


class User extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
          usersdata: [],
          mess: localStorage.getItem('Role') == 'external' ? 'External role dont see all users' : '',
          Role: localStorage.getItem('Role')
        };

    }

    async componentDidMount() {
      const url = 'http://localhost:4000/getUsers';
  
      const user = {
          ID: localStorage.getItem('ID')
      }

      if (this.state.Role == 'internal') {
        Axios.get(url, user).then((res) => {
          console.log('Executed Succesfull');
          console.log(res.data.users);
          let usersdata =  res.data.users;
          this.setState({usersdata: usersdata})
        }).catch((e) => {
            console.log("error");
        });
      }
    }



    render() {
      function handleClick(id) {
        const url = 'http://localhost:4000/deleteUser';
  
        const user = {
            ID: id
        }
  
        Axios.post(url, user).then((res) => {
          console.log('Deleted Succesfull');
          window.location.reload(); 
        }).catch((e) => {
            console.log("error");
        });
      }
    

        return (
          <div>
            <h2>User Page</h2>
            <h6 style={{marginTop: -20}}>({this.state.Role})</h6>
            <h2>{this.state.mess}</h2>
            <div>
            <table>
              <thead>
                <tr><th>username</th><th>role</th><th></th></tr>
              </thead>
              <tbody>
                {this.state.usersdata.map(function (item, index) {
                  return (
                    <tr key={item.id}>
                      <td>{item.user.username}</td>
                      <td>{item.user.role}</td>
                      <td><button onClick={() => handleClick(item.id)}>
                        Delete
                      </button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        );
    } 
}

export default User;