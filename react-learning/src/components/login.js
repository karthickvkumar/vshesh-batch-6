import React from "react";

const LoginPage = () => {

  let greetings = "Welcome to Login Page";
  let studentInfo = {
    name : "mr.abc",
    age : 25
  }

  const onLoginAction = () => {
    alert("This is working");
  }

  return(
    <div>
      <h1>{greetings}</h1>
      <h1>The student name is {studentInfo.name}, and he is {studentInfo.age} years old</h1>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input type="text" className="align-input" placeholder="Please enter email id" />
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input type="password" className="align-input" placeholder="Please enter password" />
      </div>
      <div className="space">
        <button className="button" onClick={() => onLoginAction()}>Login</button>
      </div>
      <div>
        <img src={require("../images/shinchu.jpg")} width="300" />
        <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" width="300" />
      </div>
    </div>
  )
}

export default LoginPage;