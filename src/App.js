import 'bulma/css/bulma.css';
import { useContext } from 'react';
import { Auth0Context } from './contexts/auth0-context';

import React from 'react';
import 'bulma/css/bulma.css'; 

function App() { 
  const auth0 = useContext(Auth0Context);
  return ( 
    <div className="hero is-info is-mobile"> 
      <div className="hero-body is-multiline"> 
        <div className="level has-text-centered column is-narrow"> Click Below! 
        </div>
        <div className="level has-text-centered column is-narrow">
          <button onClick={auth0.loginWithRedirect} className="button is-danger"> Login </button>
        </div>
      </div> 
    </div> 
  ); 
} 
    
export default App;
