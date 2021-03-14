import { Navbar, Nav } from 'react-bootstrap';
import { Sling as Hamburger } from 'hamburger-react'

import './NavBar.css'

const NavBar = () => {
  return(
    <Navbar id='navbar-css' expand="none" fixed='top'>
      <Navbar.Brand href="/"><h3 id='nav-brand-css'>FIELD NOTES</h3></Navbar.Brand>
      <Navbar.Toggle id='hamburger-css'>
        <Hamburger id='nav-button-css' />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav hamburger-css">
        <Nav id='nav-css'>
              <Nav.Link id='nav-link-css' href="/how-it-works">
                <h4 id='nav-link-title'>how it works</h4>
              </Nav.Link>
              <Nav.Link id='nav-link-css' href="/destinations">
                <h4 id='nav-link-title'>destinations</h4>
              </Nav.Link>
              <Nav.Link id='nav-link-css' href="/travel-tips">
                <h4 id='nav-link-title'>travel tips</h4>
                </Nav.Link>
              <Nav.Link id='nav-link-css' href="/contact">
                <h4 id='nav-link-title'>contact</h4>
              </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;