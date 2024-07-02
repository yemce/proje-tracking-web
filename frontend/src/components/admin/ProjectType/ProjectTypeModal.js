// Modal.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FacultyModal = ({ show, handleClose, project }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Proje Detayı</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {project && (
          <div>
            <p><strong>Proje Numarası:</strong> {project.projectNumber}</p>
            <p><strong>Proje Türü:</strong> {project.projectTypeName}</p>
            <p><strong>Proje Adı:</strong> {project.projectName}</p>
            <p><strong>Proje Yürütücüsü:</strong> {project.studentName || project.staffName}</p>
            <p><strong>Proje Açıklaması:</strong> {project.description}</p>
            <p><strong>Başlangıç Tarihi:</strong> {new Date(project.startDate).toLocaleDateString('tr-TR')}</p>
            <p><strong>Bitiş Tarihi:</strong> {new Date(project.endDate).toLocaleDateString('tr-TR')}</p>
            <p><strong>Proje Bütçesi:</strong> {project.budget}</p>
            {/* Diğer proje özelliklerini buraya ekleyebilirsin */}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Kapat</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FacultyModal;
