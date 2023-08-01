import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import k_logo from "../../images/k_logo.png";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={k_logo} alt="Logo" className="logo-image" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Nav.Link as={Link} to={to} className={isActive ? "active" : ""} {...props}>
      {children}
    </Nav.Link>
  )
}



/* Working Navbar, but logo too big and not responsive
import React from "react";
// import { LinkContainer } from 'react-router-bootstrap';
// import Container from 'react-bootstrap/Container';

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../images/logo.png";


export default function Navbar() {
  return (
  <nav className="nav">
    <div className="logo-container">
    <Link to="/" className="logo-image">
      <img src={logo} alt="logo" />
    </Link>
    </div>
    <ul>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
    </ul>
  </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
  )
}
*/


/*
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Tau Safaris</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <LinkContainer to="/services">
                <NavDropdown.Item>Services</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/packages">
                <NavDropdown.Item>Packages</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/transport">
                <NavDropdown.Item>Transport</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/activities">
                <NavDropdown.Item>Activities</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
*/