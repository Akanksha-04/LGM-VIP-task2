import React, { useState } from "react";
import "./UserData.css";
const Getdata = () => {
  //we are using usestate hooks.
  //userdata and setdata for storing api values and loading for loading state.
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  /* we are using async and await method sothat the program can run code even
   while the data is being fetched.*/
  const showUserData = async () => {
    //loading state maintaining
    setloading(true);
    const information = await fetch("https://reqres.in/api/users?page=1");
    let output = await information.json();
    output = output.data;
    setUserData(output);
    setloading(false);
  };

  return (
    <>
      <div>
        <div id="main">
          <div className="actions">
            <button type="submit" onClick={showUserData}>
              Get-Data
            </button>
          </div>
        </div>
      </div>

      <div className="grid">
        {
          /*Using map function, to iterate user details, and display them om screen.*/
          loading ? (
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
              <h2>loading........</h2>
            </div>
          ) : (
            userData.map((usersData) => {
              return (
                <div key={usersData.id} className="grid">
                  <div className="main">
                    <div className="card">
                      <img
                        src={usersData.avatar}
                        alt="Avatar"
                        style={{ width: "100%" }}
                      />
                      <div className="container">
                        <h4>
                          <b>
                            {usersData.first_name} {usersData.last_name}
                          </b>
                        </h4>

                        <p>{usersData.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )
        }
      </div>
    </>
  );
};

export default Getdata;
