import React, {useState, useEffect} from "react";
import axios from "axios";

const InboxPage = () => {

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    let url = "https://reqres.in/api/users?page=2";

    axios.get(url)
        .then((response) => {
          let serverData = response.data;
          setUserProfile(serverData.data);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  return(
    <div>
      <h1>Inbox Page is loaded</h1>
      <button onClick={() => loadUsers()}>Load List of Users</button>
      <table className="table-border t-width">
        <thead>
          <tr>
            <th className="table-border">Id</th>
            <th className="table-border">First Name</th>
            <th className="table-border">Last Name</th>
            <th className="table-border">Email ID</th>
            <th className="table-border">Profile Picture</th>
          </tr>
        </thead>

        <tbody>

          {
          userProfile.map((value, index) => {
            return(
              <tr key={index}>
                <td className="table-border">{value.id}</td>
                <td className="table-border">{value.first_name}</td>
                <td className="table-border">{value.last_name}</td>
                <td className="table-border">{value.email}</td>
                <td className="table-border">
                  <img src={value.avatar} className="profile-pic" />
                </td>
              </tr>
            )
          })

          }
          
        </tbody>
      </table>
    </div>
  )
}

export default InboxPage;