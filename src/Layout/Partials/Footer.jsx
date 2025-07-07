import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container>
        <div className="text-center text-muted">
          &copy; {new Date().getFullYear()} CRM System. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer