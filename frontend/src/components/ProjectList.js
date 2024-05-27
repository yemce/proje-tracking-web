// src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table,Button } from 'react-bootstrap';
import './ProjectList.css'; // Yeni oluşturulan CSS dosyasını import edin

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5141/api/Project')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <>
      
    <div className="custom-table-container">
      <Table className="custom-table">
        <thead>
          <tr>
            <th>Sıra</th>
            <th>Yıl</th>
            <th>Proje Türü</th>
            <th>Proje Numarası</th>
            <th>Proje Adı</th>
            <th>Başlangıç Tarihi</th>
            <th>Proje Süresi (ay)</th>
            <th>Tamamlanma Durumu</th>
            <th>Fakülte</th>
            <th>Bölüm</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.year}</td>
              <td>{project.projectType}</td>
              <td>{project.projectNumber}</td>
              <td>{project.projectName}</td>
              <td>{project.startDate}</td>
              <td>{project.duration}</td>
              <td>{project.complationStatus}</td>
              <td>{project.studentId}</td>
              <td>{project.staffId}</td>
              <td>
                <Button variant="primary">Detay</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default ProjectList;
