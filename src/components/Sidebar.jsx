import React from 'react';
import { FiGrid, FiFileText, FiUpload, FiX } from 'react-icons/fi'; // Add FiX


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    
    <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      
      <button className="sidebar-close-btn" onClick={toggleSidebar}>
        <FiX />
      </button>
      <div className="sidebar-header">
        <span className="logo-text">respyr</span>
        <span className="logo-clinic">CLINIC</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <FiGrid />
            <span>Dashboard</span>
          </li>
          <li>
            <FiFileText />
            <span>Test History</span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="export-button">
          <FiUpload />
          <span>Export Data</span>
        </button>
        <p className="copyright">All rights reserved by Humors Tech Pvt. Ltd. 2024</p>
      </div>
    </aside>
  );
};

export default Sidebar;