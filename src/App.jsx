import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header'; 
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
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
       
        <Header toggleSidebar={toggleSidebar} />
        {loading && <p>Loading dashboard...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && <Dashboard data={testData} />}
      </main>
    </div>
  );
}

export default App;