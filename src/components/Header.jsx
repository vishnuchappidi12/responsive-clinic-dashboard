import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi'; // Add FiMenu
import userProfile from '../assets/userProfile.png';


const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <div className="clinic-info">
          <h2>Adarsh Clinic</h2>
          <p>First floor</p>
        </div>
      </div>
      <div className="search-bar">
        <FiSearch />
        <input type="text" placeholder="Search 'Rajnikanth'" />
      </div>
      <div className="user-profile">
        <img src={userProfile} alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;