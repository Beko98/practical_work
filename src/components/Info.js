import React from "react";
import "../scss/_reset.scss";
import "../scss/_info.scss";
import { useRef, useState } from "react";
import camera from "../images/camera.png"

function Info() {
const inputRef = useRef(null);
const [image, setImage] = useState("")

const handleImageClick = () => {
  inputRef.current.click();
}
const handleImageChange = (event) => {
  const file = event.target.files[0]
  setImage(event.target.files[0])
}

  return (
    <>
      <div className="wrapper_1">
        <div className="card">
          <h2>Get Started</h2>
          <h3>add a photo</h3>
            <div>
                  <div className="addPhoto" onClick={handleImageClick}>
                        {image ? (
                        <img src={URL.createObjectURL(image)} alt="camera" className="pictureUpload" />
                        ) : (
                        <img src={camera} alt="camera" className="camera"/>
                        )}
                        <input type="file" onChange={handleImageChange} ref={inputRef}/>
                  </div>
            </div>
          <p>fill in your name</p>
          <div className="searchDiv">
          <input type="search" placeholder="your name"/>
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Info;
