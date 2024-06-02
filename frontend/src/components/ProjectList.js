// ProjectList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import ProjectModal from './ProjectModal'; // Modal bileşenini import ettik
import FilterBar from './FilterBar'; // FilterBar bileşenini import ettik
import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [filterOptions, setFilterOptions] = useState({
    years: [],
    projectTypes: [],
    faculties: [],
    departments: []
  });

  useEffect(() => {
    axios.get('http://localhost:5141/api/Project')
      .then(response => {
        const projectsData = response.data;
        setProjects(projectsData);
        setFilteredProjects(projectsData); // Filtrelenmiş projeleri başlangıçta tüm projeler olarak ayarlıyoruz
        setFilterOptions({
          years: [...new Set(projectsData.map(project => project.year))],
          projectTypes: [...new Set(projectsData.map(project => project.projectTypeId))],
          faculties: [...new Set(projectsData.map(project => project.faculty))],
          departments: [...new Set(projectsData.map(project => project.department))]
        });
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  const handleDetailClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (filters) => {
    let newFilteredProjects = projects;

    if (filters.year) {
      newFilteredProjects = newFilteredProjects.filter(project => project.year === parseInt(filters.year));
    }

    if (filters.projectType) {
      newFilteredProjects = newFilteredProjects.filter(project => project.projectTypeId === parseInt(filters.projectType));
    }

    if (filters.faculty) {
      newFilteredProjects = newFilteredProjects.filter(project => project.faculty === filters.faculty);
    }

    if (filters.department) {
      newFilteredProjects = newFilteredProjects.filter(project => project.department === filters.department);
    }

    setFilteredProjects(newFilteredProjects);
  };

  return (
    <>
      <FilterBar handleFilterChange={handleFilterChange} filterOptions={filterOptions} /> {/* Filtre barını ekliyoruz */}
      <div className="custom-table-container">
        <Table className="custom-table">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Yıl</th>
              <th>Proje Türü</th>
              <th>Proje Numarası</th>
              <th>Proje Adı</th>
              <th>Yürütücü</th>
              <th>Proje Süresi (ay)</th>
              <th>Tamamlanma Durumu</th>
              <th>Fakülte</th>
              <th>Bölüm</th>
              <th>Detay</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={project.projectId}>
                <td>{index + 1}</td>
                <td>{project.year}</td>
                <td>{project.projectTypeId}</td>
                <td>{project.projectNumber}</td>
                <td>{project.projectName}</td>
                <td>{project.studentId || project.staffId}</td>
                {/* <td>{new Date(project.startDate).toLocaleDateString('tr-TR')}</td>
                <td>{new Date(project.endDate).toLocaleDateString('tr-TR')}</td> */}
                <td>{project.duration}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={project.completionStatus}
                    disabled
                  />
                </td>
                <td>Fakülte</td>
                <td>Bölüm</td>
                <td>
                  <Button variant="primary" onClick={() => handleDetailClick(project)}>Detay</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      {/* Modal */}
      <ProjectModal show={showModal} handleClose={handleCloseModal} project={selectedProject} />
    </>
  );
};

export default ProjectList;
