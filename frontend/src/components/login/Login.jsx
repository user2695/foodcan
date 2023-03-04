import React, { useState } from "react";
import "../styles/signup.css";

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Password is: ", password);
    console.log("Email is: ", email);
  }

  return (
    <div className="signup">
      <form method="post" action="" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmailChange}
          />
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
          <input type="submit" value="Login" className="button" />
        </label>
      </form>
    </div>
  );
}

export default Signup;
