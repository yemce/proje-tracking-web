// FilterBar.js

import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa'; // react-icons kütüphanesinden ikonu import ediyoruz
import './FilterBar.css';

const FilterBar = ({ handleFilterChange, filterOptions }) => {
  const [filterValues, setFilterValues] = useState({
    year: '',
    projectType: '',
    faculty: '',
    department: ''
  });

  useEffect(() => {
    handleFilterChange(filterValues);
  }, [filterValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="filter-bar-container">
      <Form className="filter-bar-form">
        <Row className="align-items-center">
          <Col md={3} className="form-group">
            <Form.Control
              as="select"
              name="year"
              value={filterValues.year}
              onChange={handleChange}
            >
              <option value="">Yıl</option>
              {filterOptions.years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Form.Control>
            <FaCaretDown className="dropdown-icon" />
          </Col>
          <Col md={3} className="form-group">
            <Form.Control
              as="select"
              name="projectType"
              value={filterValues.projectType}
              onChange={handleChange}
            >
              <option value="">Proje Türü</option>
              {filterOptions.projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Form.Control>
            <FaCaretDown className="dropdown-icon" />
          </Col>
          <Col md={3} className="form-group">
            <Form.Control
              as="select"
              name="faculty"
              value={filterValues.faculty}
              onChange={handleChange}
            >
              <option value="">Fakülte</option>
              {filterOptions.faculties.map(faculty => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </Form.Control>
            <FaCaretDown className="dropdown-icon" />
          </Col>
          <Col md={3} className="form-group">
            <Form.Control
              as="select"
              name="department"
              value={filterValues.department}
              onChange={handleChange}
            >
              <option value="">Bölüm</option>
              {filterOptions.departments.map(department => (
                <option key={department} value={department}>{department}</option>
              ))}
            </Form.Control>
            <FaCaretDown className="dropdown-icon" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterBar;
