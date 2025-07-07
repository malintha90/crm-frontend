import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" expand="md" >
      <Container>
        {/* Left side logo */}
        <Navbar.Brand href="/">
          <img
            src="/logo192.png" // Change to your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="CRM Logo"
          />{' '}
          CRM System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar menu */}
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header