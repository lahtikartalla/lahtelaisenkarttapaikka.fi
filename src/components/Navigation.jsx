import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>ETUSIVU</NavItem>
        <NavItem>SISÄLTÖ</NavItem>
        <NavItem>
          <Link to="/info">INFO</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
