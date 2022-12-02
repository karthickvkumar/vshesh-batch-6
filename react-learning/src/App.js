import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import HomePage from "./components/home";
import MailPage from "./components/mail";

import InboxPage from "./components/inbox";
import SentPage from "./components/sent";
import TrashPage from "./components/trash";
import StarredPage from "./components/starred";

import "./App.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="mail" element={<MailPage></MailPage>}>
          <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
          <Route path="sent" element={<SentPage></SentPage>}></Route>
          <Route path="trash" element={<TrashPage></TrashPage>}></Route>
          <Route path="starred" element={<StarredPage></StarredPage>}></Route>
        </Route>
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