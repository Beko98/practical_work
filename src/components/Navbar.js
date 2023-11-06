import React from "react";
import { Link } from "react-router-dom";
import camera from "../images/camera.png";
import "../scss/_navbar.scss";
const Navbar = ({ userName, userImage }) => {
  return (
    // <div className="navbar">
    //   <div className="navbar-left">
    //     <Link to="/form">FORM</Link>
    //   </div>
    //   <div className="navbar-right">
    //     {/* <Link to="/api">API</Link> */}
    //     <h1>API</h1>
    //     <div className="user-info">
    //       <p>{userName}</p>
    //       <img src={userImage} alt="User" />
    //     </div>
    //   </div>
    // </div>
    <div>
      <nav className="navbar">
        <h1>Form</h1>
        <h2>API</h2>
        <div className="infoContainer">
          <p>Nikoloz Bekoshvili</p>
          <img src={camera} alt="camera" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
