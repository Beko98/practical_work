import React from "react";
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();
  const { name, image } = location.state || {};

  const savedName = localStorage.getItem("userName");
  const savedImage = localStorage.getItem("userImage");

  return (
    <div className="wrapper_2">
      <h2>Welcome to Form Page</h2>
      {/* {name && <p>Name: {name}</p>}
      {image && <img src={image} alt="Uploaded" />} */}
      {savedName && <p>Saved Name: {savedName}</p>}
      {savedImage && <img src={savedImage} alt="Saved" />}
    </div>
  );
}

export default Form;
