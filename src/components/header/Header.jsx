import React from "react";
import Logo from "./Logo";
import "../styles/buttons.css";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Name from "./Name";
import "../styles/header.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Name />
        <Logo />
      </div>
      <div className="buttons">
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  );
}

export default Header;
