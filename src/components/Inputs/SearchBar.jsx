import React, { useState } from 'react';
import './SearchBar.css'; // You can create a CSS file for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3']; // Add your dropdown options here

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchTerm(option);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    // Adding a slight delay before hiding the dropdown to allow time for the click event on the option to register
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {showDropdown && (
        <ul className="dropdown">
          {options
            .filter((option) =>
              option.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
