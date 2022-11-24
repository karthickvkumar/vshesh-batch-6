import React from "react";
import LoginPage from "./components/login";

import "./App.css";

const App = () => {
  return(
    <div>
      <h1>Hello Everyone! Good Morning</h1>
      <LoginPage></LoginPage>
    </div>
  )
}

// ES5 JavaScript
/*
function App(){
  return(
    <div>
      <h1>Hello, Welcome to Home Page</h1>
    </div>
  )
}
*/

export default App;