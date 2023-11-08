import React, { useState } from "react";
import "../scss/_reset.scss";
import "../scss/_form.scss";
import "../scss/_colors.scss";

import filter from "../images/filter.png";
import Navbar from "./Navbar";
import search from "../images/search.png";
import studentsData from "../students.json";
import PopupModal from "./PopupModal";
import FilterDropdown from "./FilterDropdown";
import LocalData from "./LocalData";
import Pagination from "../components/Pagination";

function Form() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [filters, setFilters] = useState({
    male: false,
    female: false,
    active: false,
    inactive: false,
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filteredStudents = studentsData.filter((student) => {
    if (filters.active && !student.isActive) return false;
    if (filters.inactive && student.isActive) return false;
    if (filters.male && student.gender !== "male") return false;
    if (filters.female && student.gender !== "female") return false;
    return true;
  });

  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const studentsToShow = paginateData(filteredStudents);

  const toggleFilterDropdown = () => {
    setFilterDropdownVisible(!filterDropdownVisible);
  };

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
            <FilterDropdown
              isVisible={filterDropdownVisible}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="something">
            <div className="filter_search">
              <div className="filterBtn" onClick={toggleFilterDropdown}>
                <img src={filter} alt="Filter" />
                <hr />
                <h2>Filter</h2>
              </div>
              <div className="search-container">
                <img src={search} alt="Search" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="studentFormCard">
              <LocalData students={studentsToShow} />
            </div>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredStudents.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
