import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import ProjectTypeModal from './ProjectTypeModal';
import FilterBar from '../../FilterBar';
import SearchBar from '../../SearchBar'
import '../../ProjectList.css';
import AddModal from './modals/AddModal';
import DeleteModal from './modals/DeleteModal';
import EditModal from './modals/EditModal';

const ProjectTypeManagement = () => {
  const [faculties, setFaculties] = useState([]);
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5141/api/Faculty')
      .then(response => {
        const facultyData = response.data;
        setFaculties(facultyData);
        setFilteredFaculties(facultyData);
      })
      .catch(error => {
        console.error('There was an error fetching the faculties!', error);
      });
  }, []);


  const handleAddClick = () => {
    setAddModal(true);
  };
  const handleEditClick = (faculty) => {
    setSelectedFaculty(faculty);
    setEditModal(true);
  };
  const handleDeleteClick = (faculty) => {
    setSelectedFaculty(faculty);
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

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = faculties.filter(item =>
      item.facultyName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFaculties(filtered);
  };

  return (
    <>
      <div className="custom-table-container">
        <div className='d-flex w-100 justify-content-end' style={{marginTop: "4%"}}>
          <Button variant='primary' onClick={() => handleAddClick()} style={{ marginRight: "4%" }}>
            Proje Ekle
          </Button>
          {/* SearchBar bileşenini burada kullanıyoruz */}
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        </div>
        <Table className="custom-table">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Fakülte Adı</th>
              <th>Düzenle</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {filteredFaculties.map((faculty, index) => (
              <tr key={faculty.facultyId}>
                <td>{index + 1}</td>
                <td>{faculty.facultyName}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEditClick(faculty)}>
                    <i class="fa-solid fa-pen-to-square" />
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteClick(faculty)}>
                    <i class="fa-solid fa-trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ProjectTypeModal show={showModal} handleClose={handleCloseModal} faculty={selectedFaculty} />
      <AddModal show={addModal} handleClose={handleCloseAddModal} />
      <EditModal show={editModal} handleClose={handleCloseEditModal} faculty={selectedFaculty} />
      <DeleteModal show={deleteModal} handleClose={handleCloseDeleteModal} faculty={selectedFaculty} />
    </>
  );
};

export default ProjectTypeManagement;
