// import logo from './logo.svg';
import React, {useState} from 'react';
import userList from './Data';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import './App.css';

const App = () => {

    const [users, setUsers] = useState(userList);

    const addUser = user =>{
        user.id = user.length + 1;
        setUsers([...users, user]);
    }
  return (
   <> 
      <div className="container">
          <h1>React crud with hooks practice</h1>
          <div className="row">
              <div className="six columns">
                  <h5>Add User</h5>
                  <AddUserForm addUser={addUser}/>
              </div>
              <div className="six columns">
                  <h5>View users</h5>  
                  <UserTable users={users} />
              </div>
          </div>
      </div>
  
   </>
  );
}

export default App;
