import React from "react";

const RegisterPage = () => {
  return(
    <div>
      <h1>Register Page</h1>
      <div className="space">
        <label className="align-label">Enter your UserName</label>
        <input type="text" className="align-input" placeholder="Please enter username"/>
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input type="password" className="align-input" placeholder="Please enter password"/>
      </div>
      <div className="space">
        <label className="align-label">Select your Date of Birth</label>
        <input type="date" className="align-input"/>
      </div>
      <div className="space">
        <label className="align-label">Select your Gender</label>
        <input type="radio" name="gender"/><span className="font">Male</span>
        <input type="radio" name="gender"/><span className="font">Female</span>
        <input type="radio" name="gender"/><span className="font">Others</span>
      </div>
      <div className="space">
        <label className="align-label">Select your IT Skills</label>
        <input type="checkbox"/><span className="font">JavaScript</span>
        <input type="checkbox"/><span className="font">Python</span>
        <input type="checkbox"/><span className="font">C# .NET</span>
        <input type="checkbox"/><span className="font">Angular</span>
        <input type="checkbox"/><span className="font">React JS</span>
        <input type="checkbox"/><span className="font">PHP</span>
        <input type="checkbox"/><span className="font">Core JAVA</span>
      </div>
      <div className="space">
        <label className="align-label">Select your Degree</label>
        <select className="align-input">
          <option>Select your qualification</option>
          <option>B.E Computer Science</option>
          <option>B.Tech IT</option>
          <option>B.Com Accounts</option>
          <option>B.Sc Microbiology</option>
          <option>M.Tech Cloud Computing</option>
          <option>M.Phil Economics</option>
        </select>
      </div>
      <div className="space">
        <label className="align-label">Enter your Address</label>
        <textarea className="align-input"></textarea>
      </div>
      <div className="space">
        <button className="button">Create your Account</button>
      </div>
    </div>
  )
}

export default RegisterPage;