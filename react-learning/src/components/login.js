import React from "react";

const LoginPage = () => {
  return(
    <div>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input type="text" className="align-input" placeholder="Please enter email id" />
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input type="password" className="align-input" placeholder="Please enter password" />
      </div>
      <div className="space">
        <button className="button">Login</button>
      </div>
    </div>
  )
}

export default LoginPage;