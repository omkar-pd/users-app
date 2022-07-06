import React from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
