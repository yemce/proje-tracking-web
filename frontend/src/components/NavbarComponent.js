import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css'; // Yeni oluşturulan CSS dosyasını import edin

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://samsun.edu.tr/wp-content/uploads/2023/02/mavi-logo-yatay.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >ANA SAYFA</Nav.Link>
            <Nav.Link >PROJELER</Nav.Link>
            <Nav.Link >FAKÜLTELER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
