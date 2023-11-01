import React from "react";
import "../scss/_reset.scss";
import "../scss/_getstarted.scss";
import { Link } from "react-router-dom";
import list from "../images/list.png";

function GetStarted() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <img src={list} alt="listIcon" />
            <h1>Get Started Today</h1>
            <Link to="/info">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
