import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (action) => {
  //const { loginWithRedirect } = useAuth0();

  return <button className="button is-success" onClick={action}>Log In</button>;
};

export default LoginButton;