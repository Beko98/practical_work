import { React, useState } from "react";
import "../scss/_reset.scss";
import "../scss/_form.scss";
import filter from "../images/filter.png";
import Navbar from "./Navbar";
import search from "../images/search.png";
import studentsData from "../students.json";
import PopupModal from "./PopupModal";
import FilterDropdown from "./FilterDropdown";

function Form() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);

  const toggleFilterDropdown = () => {
    setFilterDropdownVisible(!filterDropdownVisible);
  };

  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const students = paginateData(studentsData);

  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="wrapper_2">
      <Navbar onImageClick={handleImageClick} />
      {showPopup && (
        <PopupModal imageUrl="your-image-url.jpg" onClose={handlePopupClose} />
      )}
      <div className="mainContainer">
        <div className="combined">
          <div className="filter">
            <FilterDropdown isVisible={filterDropdownVisible} />
          </div>
          <div className="filter_search">
            <div className="filterBtn" onClick={toggleFilterDropdown}>
              <img src={filter} alt="filter" />
              <hr />
              <h2>filter</h2>
            </div>
            <div className="search-container">
              <img src={search} alt="" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="studentFormCard">
            <div className="studentFeatures">
              <h3>
                სტუდენტის სახელი <br /> და გვარი
              </h3>
              <h3>სტატუსი</h3>
              <h3>სქესი</h3>
              <h3>ქულები</h3>
              <h3>პირადი ნომერი</h3>
              <h3>მაილი</h3>
              <h3>ტელეფონის ნომერი</h3>
              <h3>მისამართი</h3>
              <h3>დაბადების თარიღი</h3>
            </div>
            {students.map((student) => (
              <div key={student.id} className="student-card">
                <div className="outcome">
                  <p>
                    {student.firstName} {student.lastName}
                  </p>
                  <p> {student.status}</p>
                  <p> {student.gender}</p>
                  <p> {student.points}</p>
                  <p> {student.personalNumber}</p>
                  <p> {student.email}</p>
                  <p> {student.mobileNumber}</p>
                  <p> {student.address}</p>
                  <p> {student.dateOfBirth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

// {students.map((student) => (
//   <div key={student.id} className="student-card">
//     <h2>
//       student name and surname:
//       {student.firstName} {student.lastName}
//     </h2>
//     <p>Status: {student.status}</p>
//     <p>Gender: {student.gender}</p>
//     <p>Points: {student.points}</p>
//     <p>Personal Number: {student.personalNumber}</p>
//     <p>Email: {student.email}</p>
//     <p>Mobile Number: {student.mobileNumber}</p>
//     <p>Address: {student.address}</p>
//     <p>Date of Birth: {student.dateOfBirth}</p>
//   </div>
// ))}
