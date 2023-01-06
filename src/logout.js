import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { origin } from "./configure";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;