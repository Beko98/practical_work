// import React from "react";
// // import { Link } from "react-router-dom";
// // import nikusha from "../images/nikusha.jpg";
// import "../scss/_navbar.scss";
// import { Link, useLocation, useNavigate, useState } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { name, image } = location.state || {};
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const savedName = localStorage.getItem("userName");
//   const savedImage = localStorage.getItem("userImage");

//   const handleLogout = () => {
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userImage");
//     navigate("/");
//   };
//   return (
//     <div>
//       <nav className="navbar">
//         <h1>Form</h1>
//         <h2>API</h2>
//         <div className="infoContainer">
//           {name && <p>Name: {name}</p>}
//           {image && <img src={image} alt="Uploaded" />}
//           {savedName && <p> {savedName}</p>}
//           {savedImage && <img src={savedImage} alt="Saved" />}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react"; // useState is imported from react, not react-router-dom
import { useNavigate, useLocation } from "react-router-dom";
import "../scss/_navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);

  // If the state is passed to this component via the location object, it will be used.
  // Otherwise, the saved values from localStorage will be used.
  const name = location.state?.name || localStorage.getItem("userName");
  const image = location.state?.image || localStorage.getItem("userImage");

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userImage");
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>Form</h1>
        <h2>
          <Link to="/api">API</Link>
        </h2>
        <div className="infoContainer">
          {name && <p> {name}</p>}
          {image && (
            <div onClick={() => setPopupOpen(true)} className="imageContainer">
              <img src={image} alt="Profile" />
            </div>
          )}
        </div>
      </nav>

      {isPopupOpen && (
        <div className="popup">
          <div className="popupInner">
            <button className="closeButton" onClick={() => setPopupOpen(false)}>
              Close
            </button>
            <button className="logoutButton" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
