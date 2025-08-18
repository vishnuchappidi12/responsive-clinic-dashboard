import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link }  from 'react-router-dom';



const Userdetails=()=>{
    const { id } = useParams(); 
    const location = useLocation();
    const test=location.state;
    if(!test) {
        return <div>No test data available</div>;  
     }

    return (
        <div className="user-details">

         <Link to="/" classname="text-blue-600underline">Back</Link>
    
        <h1>User Details</h1>
            <p><strong>Name:</strong> {test.name}</p>
            <p><strong>Date:</strong> {new Date(test.date_time).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {new Date(test.date_time).toLocaleTimeString()}</p>
            <p><strong>Liver Score:</strong> {test.liver_score}%</p>
            <p><strong>Glucose Score:</strong> {test.glucose_score}%</p>
        </div>
    );
}
export default Userdetails;