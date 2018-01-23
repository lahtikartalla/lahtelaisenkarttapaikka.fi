import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>ETUSIVU</NavItem>
        <NavItem>SISÄLTÖ</NavItem>
        <NavItem>INFO</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
