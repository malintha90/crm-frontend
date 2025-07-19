import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BreadcrumbComp from '../../Components/Breadcrumb/BreadcrumbComp'
import AddTicketForm from '../../Components/TicketForm/AddTicketForm'

const AddNewTicket = () => {
  return (
       <Container className="my-4">
        <Row>
            <Col>
                <BreadcrumbComp page={"Add New Ticket"}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default AddNewTicket