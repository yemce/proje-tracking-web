import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import ProjectModal from './StudentModal';
import FilterBar from '../../FilterBar';
import SearchBar from '../../SearchBar'
import '../../ProjectList.css';
import AddModal from './modals/AddModal';
import DeleteModal from './modals/DeleteModal';
import EditModal from './modals/EditModal';

const StudentManagement = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    years: [],
    projectTypes: [],
    faculties: [],
    departments: []
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5141/api/Project')
      .then(response => {
        const projectsData = response.data;
        setProjects(projectsData);
        setFilteredProjects(projectsData);
        setFilterOptions({
          years: [...new Set(projectsData.map(project => project.year))],
          projectTypes: [...new Set(projectsData.map(project => project.projectTypeName))],
          faculties: [...new Set(projectsData.map(project => project.facultyName))],
          departments: [...new Set(projectsData.map(project => project.departmentName))]
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

  const handleAddClick = () => {
    setAddModal(true);
  };
  const handleEditClick = (project) => {
    setSelectedProject(project);
    setEditModal(true);
  };
  const handleDeleteClick = (project) => {
    setSelectedProject(project);
    setDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseAddModal = () => {
    setAddModal(false);
  };
  const handleCloseEditModal = () => {
    setEditModal(false);
  };
  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleFilterChange = (filters) => {
    let newFilteredProjects = projects;

    if (filters.year) {
      newFilteredProjects = newFilteredProjects.filter(project => project.year === parseInt(filters.year));
    }

    if (filters.projectType) {
      newFilteredProjects = newFilteredProjects.filter(project => project.projectTypeName === filters.projectType);
    }

    if (filters.faculty) {
      newFilteredProjects = newFilteredProjects.filter(project => project.facultyName === filters.faculty);
    }

    if (filters.department) {
      newFilteredProjects = newFilteredProjects.filter(project => project.departmentName === filters.department);
    }

    setFilteredProjects(newFilteredProjects);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = projects.filter(project =>
      project.projectName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <FilterBar handleFilterChange={handleFilterChange} filterOptions={filterOptions} />
      <div className="custom-table-container">
        <div className='d-flex w-100 justify-content-end'>
          <Button variant='primary' onClick={() => handleAddClick()} style={{ marginRight: "4%" }}>
            Öğrenci Ekle
          </Button>
          {/* SearchBar bileşenini burada kullanıyoruz */}
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        </div>
        <Table className="custom-table">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>TC</th>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>Okul Numarası</th>
              <th>Email</th>
              <th>Bölüm</th>
              <th>Düzenle</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={project.projectId}>
                <td>{index + 1}</td>
                <td>{project.year}</td>
                <td>{project.projectTypeName}</td>
                <td>{project.projectNumber}</td>
                <td>{project.projectName}</td>
                <td>{project.studentName || project.staffName}</td>
                
                <td>{project.departmentName}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEditClick(project)}>
                    <i class="fa-solid fa-pen-to-square" />
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteClick(project)}>
                    <i class="fa-solid fa-trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ProjectModal show={showModal} handleClose={handleCloseModal} project={selectedProject} />
      <AddModal show={addModal} handleClose={handleCloseAddModal} />
      <EditModal show={editModal} handleClose={handleCloseEditModal} project={selectedProject} />
      <DeleteModal show={deleteModal} handleClose={handleCloseDeleteModal} project={selectedProject} />
    </>
  );
};

export default StudentManagement;
