import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";
import { useState, useRef } from "react";
const AddUser = (props) => {
  // const [enteredUsername, setUsername] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();
  const enteredNameRef = useRef();
  const enteredUserAgeRef = useRef();

  const addUserHandler = (event) => {
    const enteredUsername = enteredNameRef.current.value;
    const enteredAge = enteredUserAgeRef.current.value;
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Please Enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        msg: "Please Enter valid a age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    enteredNameRef.current.value = "";
    enteredUserAgeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredNameRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="Number" ref={enteredUserAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
