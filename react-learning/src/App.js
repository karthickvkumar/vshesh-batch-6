import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";

import "./App.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </BrowserRouter>
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