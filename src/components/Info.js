// import React from "react";
// import "../scss/_reset.scss";
// import "../scss/_info.scss";
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import camera from "../images/camera.png";

// function Info() {
//   const inputRef = useRef(null);
//   const [image, setImage] = useState("");

//   const handleImageClick = () => {
//     inputRef.current.click();
//   };
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImage(event.target.files[0]);
//   };

//   return (
//     <>
//       <div className="wrapper_1">
//         <div className="card">
//           <h2>Get Started</h2>
//           <h3>add a photo</h3>
//           <div>
//             <div className="addPhoto" onClick={handleImageClick}>
//               {image ? (
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="camera"
//                   className="pictureUpload"
//                 />
//               ) : (
//                 <img src={camera} alt="camera" className="camera" />
//               )}
//               <input type="file" onChange={handleImageChange} ref={inputRef} />
//             </div>
//           </div>
//           <p>fill in your name</p>
//           <div className="searchDiv">
//             <input type="search" placeholder="your name" />
//           </div>
//           <Link to="/form">
//             <button>Sign in</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Info;

//s
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../scss/_reset.scss";
import "../scss/_info.scss";
import camera from "../images/camera.png";

function Info() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const containerRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
    localStorage.setItem("userImage", imageURL);

    setImageUploaded(true);
    setBackgroundColor("white");
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  return (
    <div className="wrapper_1">
      <div className="card">
        <h2>Get Started</h2>
        <h3>add a photo</h3>
        <div>
          <div
            className="addPhoto"
            onClick={handleImageClick}
            ref={containerRef}
            style={{
              backgroundColor: imageUploaded ? backgroundColor : "#e6ebff",
            }}
          >
            {image ? (
              <img src={image} alt="camera" className="pictureUpload" />
            ) : (
              <img src={camera} alt="camera" className="camera" />
            )}
            <input type="file" onChange={handleImageChange} ref={inputRef} />
          </div>
        </div>
        <p>fill in your name</p>
        <div className="searchDiv">
          <input
            type="search"
            placeholder="your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <Link
          to={{
            pathname: "/form",
            state: { name, image },
          }}
        >
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
