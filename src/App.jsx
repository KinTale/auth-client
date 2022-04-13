import "./App.css";
import React, { useState } from "react";

export default function App() {

  const [register, setRegister] = useState(null);
  const [login, setlogin] = useState(false);
console.log(login)

  const formRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch("http://localhost:4000/register", options)
      .then((res) => res.json())
      .then((json) => setRegister(json));
  };

  const formLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch("http://localhost:4000/login", options)
      .then((res) => res.json())
      .then((json) =>{ 
        setlogin(json.verify)  
        localStorage.setItem('token',json.token)});
  };
  return (
    <>
      <div className="App">
        <h1>Register</h1>
        <form className="form" onSubmit={(e) => formRegister(e)}>
          <label for="username">Username: </label>
          <input type="text" name="username" id="username-register" required></input>

          <label for="password">Password :</label>
          <input type="password" name="password" id="password-register" required></input>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          {register !== null &&
            `Thankyou for registering ${register.user.username}`}
        </div>

        <h1>Login</h1>

        <form className="form" onSubmit={(e) => formLogin(e)}>
          <label for="username">Username: </label>
          <input type="text" name="username" id="username-login" required></input>

          <label for="password">Password :</label>
          <input type="password" name="password" id="password-login" required></input>
          <input type="submit" value="Submit"></input>
        </form>
        <div>{login === true && `Welcomeback!`}</div>
      </div>
    </>
  );
}
