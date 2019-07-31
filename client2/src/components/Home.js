import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container text-center">
        <h1>Welcome to eX-man your expense manager app</h1>
        <p>
          <u>Keep track of where your money is going it's easy as 1, 2, 3...</u>
        </p>
        <Link to="/signup">
          <span className="btn btn-secondary">Sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
