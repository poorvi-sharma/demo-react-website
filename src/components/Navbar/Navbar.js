import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light navcol">
        <img className="Orange" src="/Orange-Image.png" alt="Orange"></img>
        <Link className="navbar-brand navcol col1" href="/" exact to="/">
          <p>
            <strong className="Nicol">Nicol Rider</strong> Editor
          </p>
        </Link>

        <button
          className="navbar-toggler navbar-light navbar-toggler-left border-0"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse fortext col1 " + show}>
          <ul className="navbar-nav mr-auto ull">
            <li className="nav-item">
              <NavLink className="nav-link col1" exact to="/resume">
                <p className="hove">Resume</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link col1" exact to="/projects">
                <p className="hove">Projects</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link col1" exact to="/contact">
                <p className="hove">Contact</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
