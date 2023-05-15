import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="users/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
