import React, {useState} from "react";

const RegisterPage = () => {

  const [registerForm, setRegisterForm] = useState({
    username : "",
    password : "",
    date_of_birth: "",
    gender: "",
    skills : [],
    educational_degree: "",
    address : ""
  });

  const createNewAccount = () => {
    alert("Your account is created");
    console.log(registerForm);
  }

  const onHandleInput = (event) => {
    if(event.target.name === "skills"){
      if(event.target.checked){
        registerForm.skills.push(event.target.value);
      }
      else{
        let index = registerForm.skills.indexOf(event.target.value);  
        registerForm.skills.splice(index , 1);
      }
    }
    else{
      setRegisterForm({...registerForm, [event.target.name] : event.target.value });
    }
  }

  return(
    <div>
      <h1>Register Page</h1>
      <div className="space">
        <label className="align-label">Enter your UserName</label>
        <input type="text" className="align-input" placeholder="Please enter username" onChange={onHandleInput} name="username"/>
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input type="password" className="align-input" placeholder="Please enter password" onChange={onHandleInput} name="password"/>
      </div>
      <div className="space">
        <label className="align-label">Select your Date of Birth</label>
        <input type="date" className="align-input" onChange={onHandleInput} name="date_of_birth"/>
      </div>
      <div className="space">
        <label className="align-label">Select your Gender</label>
        <input type="radio" name="gender" onChange={onHandleInput} value="Male"/>
        <span className="font">Male</span>
        <input type="radio" name="gender" onChange={onHandleInput} value="Female"/>
        <span className="font">Female</span>
        <input type="radio" name="gender" onChange={onHandleInput} value="Others"/>
        <span className="font">Others</span>
      </div>
      <div className="space">
        <label className="align-label">Select your IT Skills</label>
        <input type="checkbox" onChange={onHandleInput} value="JavaScript" name="skills"/>
        <span className="font">JavaScript</span>

        <input type="checkbox" onChange={onHandleInput} value="Python" name="skills"/>
        <span className="font">Python</span>

        <input type="checkbox" onChange={onHandleInput} value="C# .NET" name="skills"/>
        <span className="font">C# .NET</span>

        <input type="checkbox" onChange={onHandleInput} value="Angular" name="skills"/>
        <span className="font">Angular</span>

        <input type="checkbox" onChange={onHandleInput} value="React JS" name="skills"/>
        <span className="font">React JS</span>

        <input type="checkbox" onChange={onHandleInput} value="PHP" name="skills"/>
        <span className="font">PHP</span>

        <input type="checkbox" onChange={onHandleInput} value="Core JAVA" name="skills"/>
        <span className="font">Core JAVA</span>
      </div>
      <div className="space">
        <label className="align-label">Select your Degree</label>
        <select className="align-input" onChange={onHandleInput} name="educational_degree">
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
        <textarea className="align-input" onChange={onHandleInput} name="address"></textarea>
      </div>
      <div className="space">
        <button className="button" onClick={() => createNewAccount()}>Create your Account</button>
      </div>
    </div>
  )
}

export default RegisterPage;