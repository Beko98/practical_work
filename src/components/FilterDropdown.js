// import React, { useState } from "react";
// import "../scss/_form.scss"; // Assuming you have your styles defined here

// const FilterDropdown = ({ onFilterChange }) => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     male: false,
//     female: false,
//     active: false,
//     inactive: false,
//   });

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleFilterChange = (filterKey) => {
//     const newFilters = {
//       ...filters,
//       [filterKey]: !filters[filterKey],
//     };
//     setFilters(newFilters);

//     // This is where you could do something with the changed filters,
//     // e.g., lifting the state up to a parent component or making an API call.
//     onFilterChange(newFilters);
//   };

//   return (
//     <div className="filter-container">
//       <button className="filter-button" onClick={toggleDropdown}>
//         Filter
//       </button>

//       {isDropdownOpen && (
//         <div className="filter-dropdown">
//           <div className="filter-option">
//             <input
//               id="male"
//               type="checkbox"
//               checked={filters.male}
//               onChange={() => handleFilterChange("male")}
//             />
//             <label htmlFor="male">Male</label>
//           </div>
//           <div className="filter-option">
//             <input
//               id="female"
//               type="checkbox"
//               checked={filters.female}
//               onChange={() => handleFilterChange("female")}
//             />
//             <label htmlFor="female">Female</label>
//           </div>
//           <div className="filter-option">
//             <input
//               id="active"
//               type="checkbox"
//               checked={filters.active}
//               onChange={() => handleFilterChange("active")}
//             />
//             <label htmlFor="active">Active</label>
//           </div>
//           <div className="filter-option">
//             <input
//               id="inactive"
//               type="checkbox"
//               checked={filters.inactive}
//               onChange={() => handleFilterChange("inactive")}
//             />
//             <label htmlFor="inactive">Inactive</label>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;

//2222222

// import React, { useState } from "react";
// import "../scss/_filterDropdown.scss"; // Make sure to create this SCSS file

// function FilterDropdown() {
//   const [filter, setFilter] = useState({
//     male: false,
//     female: false,
//     active: false,
//     inactive: false,
//   });

//   // Handles changing the state of each filter option
//   const handleFilterChange = (e) => {
//     const { name, checked } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: checked }));
//   };

//   return (
//     <div className="filter-dropdown">
//       <div className="filter-option">
//         <input
//           type="checkbox"
//           id="active"
//           name="active"
//           checked={filter.active}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="active">Active</label>
//       </div>
//       <div className="filter-option">
//         <input
//           type="checkbox"
//           id="inactive"
//           name="inactive"
//           checked={filter.inactive}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="inactive">Inactive</label>
//       </div>
//       <div className="filter-option">
//         <input
//           type="checkbox"
//           id="male"
//           name="male"
//           checked={filter.male}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="male">Male</label>
//       </div>
//       <div className="filter-option">
//         <input
//           type="checkbox"
//           id="female"
//           name="female"
//           checked={filter.female}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="female">Female</label>
//       </div>
//     </div>
//   );
// }

// export default FilterDropdown;
import React, { useState } from "react";
import "../scss/_filterDropdown.scss";

function FilterDropdown({ isVisible }) {
  const [statusFilterVisible, setStatusFilterVisible] = useState(false);
  const [genderFilterVisible, setGenderFilterVisible] = useState(false);
  const dropdownClass = isVisible ? "visible" : "hidden";
  const [filters, setFilters] = useState({
    male: false,
    female: false,
    active: false,
    inactive: false,
  });

  const toggleStatusFilter = () => {
    setStatusFilterVisible(!statusFilterVisible);
  };

  const toggleGenderFilter = () => {
    setGenderFilterVisible(!genderFilterVisible);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  return (
    <div className={`filter-dropdown ${dropdownClass}`}>
      <div className="filter-section">
        <button className="dropdown-toggle" onClick={toggleStatusFilter}>
          {statusFilterVisible ? "▲" : "▼"} სტუდენტის სტატუსი
        </button>
        {statusFilterVisible && (
          <div className="filter-options">
            <div className="filter-option">
              <input
                type="checkbox"
                id="active"
                name="active"
                checked={filters.active}
                onChange={handleFilterChange}
              />
              <label htmlFor="active">Active</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="inactive"
                name="inactive"
                checked={filters.inactive}
                onChange={handleFilterChange}
              />
              <label htmlFor="inactive">Inactive</label>
            </div>
          </div>
        )}
      </div>

      {/* Gender Filter */}
      <div className="filter-section">
        <button className="dropdown-toggle" onClick={toggleGenderFilter}>
          {genderFilterVisible ? "▲" : "▼"} სქესი
        </button>
        {genderFilterVisible && (
          <div className="filter-options">
            <div className="filter-option">
              <input
                type="checkbox"
                id="male"
                name="male"
                checked={filters.male}
                onChange={handleFilterChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="female"
                name="female"
                checked={filters.female}
                onChange={handleFilterChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;
