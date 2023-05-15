import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./components/User/User";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="Home">
      <nav>
        <h2>Title</h2>
      </nav>
      <h3>Users</h3>

      <div className="container">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} component={<User />}>
            <div className="single">
              <div className="img">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
              </div>
              <div className="info">
                <p>{user.first_name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
