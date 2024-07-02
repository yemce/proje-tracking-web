import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyList = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get('http://localhost:5141/api/Faculty');
      setFaculties(response.data);
    } catch (error) {
      console.error('Error fetching faculties:', error);
    }
  };

  return (
    <div>
      <h2>Faculty List</h2>
      <ul>
        {faculties.map(faculty => (
          <li key={faculty.facultyId}>{faculty.facultyName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
