import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "../Greeting";

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <React.Fragment>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </React.Fragment>
  );
}

export default LoginControl;
