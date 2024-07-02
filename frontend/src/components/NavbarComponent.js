import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css'; // Import the newly created CSS file

function NavbarComponent({ isAdmin }) {
  return (
    <Navbar expand="lg" className="custom-navbar ">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://samsun.edu.tr/wp-content/uploads/2023/02/mavi-logo-yatay.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            {isAdmin ? (
              <>
                <Nav.Link as={NavLink} to="/admin/projeler">Projeler</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/ogrenciler">Öğrenciler</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/bolumler">Bölümler</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/fakulteler">Fakülteler</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/akademik-personel">Akademik Personeller</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/proje-turleri">Proje Türleri</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                <Nav.Link as={NavLink} to="/projeler">Projeler</Nav.Link>
                <Nav.Link as={NavLink} to="/fakulteler">Fakülteler</Nav.Link>
                <Nav.Link as={NavLink} to="/admin">Admin Panel</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
