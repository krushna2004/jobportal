import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Using react-icons for the user icon
import './header.css'; // Assuming you have some CSS for styling

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/companyreview" className="nav-link">Company Review</Link>
          </li>
          <li className="nav-item">
            <Link to="/salaryguide" className="nav-link">Salary Guidance</Link>
          </li>
          <li className="nav-item user-dropdown">
            <FaUser className="user-icon" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/login" className="dropdown-item">Login</Link>
                <Link to="/signup" className="dropdown-item">Signup</Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/postjob" className="nav-link">Post Job</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
