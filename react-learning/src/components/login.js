import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email : "",
    password : ""
  });

  const [passwordStatus, setPasswordStatus] = useState(true);

  const onLoginAction = () => {
    // console.log(formValue); 
    const url = "https://reqres.in/api/login";

    axios.post(url, formValue)
        .then((response) => {
          console.log(response);
          alert("Login Successfull");
          navigate("/mail/inbox");
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong, pls contact admin");
        })
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setFormValue({...formValue, [event.target.name] : event.target.value});
  }

  const passwordVisiblity = (status) => {
    setPasswordStatus(status);
  }

  return(
    <div>
      <h1>Your email id is {formValue.email} and password {formValue.password}</h1>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input type="text" className="align-input" placeholder="Please enter email id" onChange={onHandleInput} name="email" />
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input type={passwordStatus ? "password" : "text"} className="align-input" placeholder="Please enter password" onChange={onHandleInput} name="password" />

        {passwordStatus ? 
            <img src={require("../images/eye-closed.png")} width="65" onClick={() => passwordVisiblity(false)} /> 
            : 
            <img src={require("../images/open-eye.png")} width="65" onClick={() => passwordVisiblity(true)} />
        }
        
  
      </div>
      <div className="space">
        <button className="button" onClick={() => onLoginAction()}>Login</button>
      </div>
      <div>
        <img src={require("../images/shinchu.jpg")} width="300" />
        <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" width="300" />
      </div>
      <div>
        <h1>Conditional Rendering</h1>
        <h2>Inline IF condition</h2>
        { false && <h1>Good Day!</h1> }
        <h2>Inline IF ELSE Condition</h2>
        { false ? <h1>Good Morning!</h1> : <h1>Good Night</h1> }
      </div>
    </div>
  )
}

export default LoginPage;