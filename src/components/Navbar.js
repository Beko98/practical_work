import React from "react";
// import { Link } from "react-router-dom";
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
