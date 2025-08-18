import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Userdetails from './components/Userdetails';
import './App.css';

function App() {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/assignment/get_test_data.php');
        const dataArray = Object.values(response.data)[0];
        setTestData(dataArray);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    // The Router should wrap the entire application
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          {loading && <p>Loading dashboard...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && (
            // The Routes component now correctly sits inside the main content area
            <Routes>
              <Route path="/" element={<Dashboard data={testData} />} />
              {/* Pass the testData to the Userdetails component */}
              <Route path="/user/:name" element={<Userdetails data={testData} />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;