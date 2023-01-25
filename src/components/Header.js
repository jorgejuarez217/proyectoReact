import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="logo" href="#home">
          LA FAMILIA
        </Navbar.Brand>
        <Nav id="navbar" className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
          <Nav.Link href="#" className="material-icons">
            shopping_cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
