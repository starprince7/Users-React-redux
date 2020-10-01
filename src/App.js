import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import './App.css';
import UsersList from './components/UsersList';

//export const UserContext = React.createContext()
//export const SetUserContext = React.createContext()

function App() {

  return (
      <div className="App">
          <div className="header"><h1>Register Users</h1></div>
            <UsersList />
            <Form />
      </div>
  );
}

export default App;
