import React from "react";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Name from "./Name";
import "../styles/header.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <Name />
      </div>
      <div className="buttons">
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  );
}

export default Header;
