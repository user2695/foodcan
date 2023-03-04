import React, { useState } from "react";
import "../styles/signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name is: ", name);
    console.log("Password is: ", password);
  }
  return (
    <div className="signup">
      <form method="post" action="" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNameChange}
          />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassChange}
          />
        </label>

        <label>
          <input type="submit" value="Signup" className="button" />
        </label>
      </form>
    </div>
  );
}

export default Signup;
