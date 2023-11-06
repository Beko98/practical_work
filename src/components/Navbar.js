import React from "react";
import { Link } from "react-router-dom";
// import nikusha from "../images/nikusha.jpg";
import "../scss/_navbar.scss";
import { useLocation } from "react-router-dom";

const Navbar = ({ userName, userImage }) => {
  const location = useLocation();
  const { name, image } = location.state || {};

  const savedName = localStorage.getItem("userName");
  const savedImage = localStorage.getItem("userImage");
  return (
   
    <div>
      <nav className="navbar">
        <h1>Form</h1>
        <h2>API</h2>
        <hr />
        <div className="infoContainer">
          {name && <p>Name: {name}</p>}
          {image && <img src={image} alt="Uploaded" />}
          {savedName && <p> {savedName}</p>}
          {savedImage && <img src={savedImage} alt="Saved" />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



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