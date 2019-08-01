import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./services/Service";

const service = new AuthService();

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleLogout = () => {
    service
      .logout()
      .then(res => {
        window.localStorage.clear();
      })
      .catch(err => console.log(err));
  };

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand">eX-man</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"collapse navbar-collapse justify-content-end " + show}>
          <div className="navbar-nav">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Sign up</span>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Login</span>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link">Profile</span>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="nav-item nav-link" onClick={this.handleLogout}>
                Logout
              </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
