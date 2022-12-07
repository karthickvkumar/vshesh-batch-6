import React from "react";
import axios from "axios";

const TrashPage = () => {

  const deleteUsers = () => {
    const url = "https://reqres.in/api/users/2";

    axios.delete(url)
        .then((response) => {
          console.log(response);
          alert("User profile has been deleted");
        })
        .catch((error) => {
          console.log(error);
        })
  }

  return(
    <div>
      <h1>Trash Page is loaded</h1>
      <button onClick={() => deleteUsers()}>Delete Users</button>
    </div>
  )
}

export default TrashPage;