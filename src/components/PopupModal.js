import React from "react";

const PopupModal = ({ imageUrl, onClose }) => {
  return (
    <div className="popup-modal">
      <div className="popup-content">
        <img src={imageUrl} alt="Popup Image" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <button className="logout-button" onClick={onClose}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
