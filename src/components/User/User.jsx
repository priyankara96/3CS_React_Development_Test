import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [userId]);

  return (
    <div className="User">
      <nav>
        <a href="javascript:history.back()">
          <h2 style={{ textAlign: "left" }}>Back</h2>
        </a>
      </nav>
      <h3> </h3>
      <div class="container">
        <div className="user">
          <div className="img">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </div>
          <div className="user-info">
            <p className="user-info-p">First Name: {user.first_name}</p>
            <p className="user-info-p">Last Name : {user.last_name}</p>
            <p className="user-info-p">Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
