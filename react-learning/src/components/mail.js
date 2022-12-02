import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MailPage = () => {
  return(
    <div className="wrapper">
        <div className="header">
          Mail Page
        </div>
        <div className="container">
          <div className="sidebar">
            <NavLink to="/mail/inbox">Inbox Page</NavLink>
            <br/>
            <NavLink to="/mail/sent">Sent Page</NavLink>
            <br/>
            <NavLink to="/mail/trash">Trash Page</NavLink>
            <br/>
            <NavLink to="/mail/starred">Starred Page</NavLink>
          </div>
          <div className="main-content">
            <Outlet></Outlet>
          </div>
        </div>
    </div>
  )
}

export default MailPage;