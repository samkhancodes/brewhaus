import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            {/* <img src="../assets/beer-mug.svg"  /> */}
            Brewhaus
          </Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Header;
