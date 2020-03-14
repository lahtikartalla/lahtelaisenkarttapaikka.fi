import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="#/">ETUSIVU</NavItem>
        <NavItem href="#/kartta">KARTTA</NavItem>
        <NavItem href="#/info">INFO</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
