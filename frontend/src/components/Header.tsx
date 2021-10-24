import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand href="/">Next Gen Gadgets</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Link to="/cart">
                <Nav.Link href="/cart">
                  <BsFillCartCheckFill />
                  Cart
                </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link href="/login">
                  <FaUserCircle />
                  Sign In
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
