import React from 'react'

import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Projeyi Sil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h2>Silmek istediğinize emin misin?</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>İptal</Button>
        <Button variant="danger" onClick={handleClose}>Sil</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal