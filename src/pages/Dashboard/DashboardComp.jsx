import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TicketTable from '../../Components/Tables/TicketTable'
import tickets from '../../assets/MockData/tickets.json'
import BreadcrumbComp from '../../Components/Breadcrumb/BreadcrumbComp'

const DashboardComp = () => {
  return (
    <Container className="my-4">
        <Row>
            <Col>
                <BreadcrumbComp page={"Dashboard"}/>
            </Col>
        </Row>
      <Row>
         <Col className="d-flex justify-content-start mt-2">
            <p>Totel Tickets : 50 | Pending Tickets: 10</p>
        </Col>
        <Col className="d-flex justify-content-end mt-2 mb-2">
          <Button variant="info">Add New Ticket</Button>
        </Col>
      </Row>
      <Row>
       <TicketTable tickets={tickets}/>
      </Row>
    </Container>
  )
}

export default DashboardComp