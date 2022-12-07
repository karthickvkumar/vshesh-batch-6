import React, {useState} from "react";
import axios from "axios";

const SentPage = () => {

  const [data, setData] = useState({
    name : "",
    job : ""
  });

  const onHandleInput = (event) => {
    setData({...data, [event.target.name] : event.target.value });
  }

  const onSubmitForm = () => {
    // console.log(data);
    const url = "https://reqres.in/api/users/2";

    axios.put(url, data)
        .then((response) => {
          let serverData = response.data;
          console.log(serverData);
          alert("User Profile has been updated successfully");
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong, pls try again later");
        })
  }

  return(
    <div>
      <h1>Sent Page is loaded</h1>
      <div className="space">
        <label className="align-label">Enter your Name</label>
        <input type="text" className="align-input" placeholder="Please enter name" onChange={onHandleInput} name="name"/>
      </div>
      <div className="space">
        <label className="align-label">Enter your Job Description</label>
        <textarea className="align-input" placeholder="Please enter Job description" onChange={onHandleInput} name="job"></textarea>
      </div>
      <div className="space">
        <button className="button" onClick={() => onSubmitForm()}>Sumbit</button>
      </div>
    </div>
  )
}

export default SentPage;