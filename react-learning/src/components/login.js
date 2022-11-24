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
      <div>
        <img src={require("../images/shinchu.jpg")} width="300" />
        <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" width="300" />
      </div>
    </div>
  )
}

export default LoginPage;