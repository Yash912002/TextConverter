import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand mx-2" href="/"> {props.title} </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/"> {props.info} </a>
          </li>
        </ul>
 
        {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
            </button>
        </form> */}

        <div className = {`form-check form-switch text-${props.text}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                 onClick = {props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.textMode}</label>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title : "Default Title",
//     info : "Default info"
// }