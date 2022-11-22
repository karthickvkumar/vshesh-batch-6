import React from "react";

const LoginPage = () => {
  return(
    <div>
      <div>
        <label>Enter your Email ID</label>
        <input type="text" placeholder="Please enter email id" />
      </div>
      <div>
        <label>Enter your Password</label>
        <input type="password" placeholder="Please enter password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginPage;