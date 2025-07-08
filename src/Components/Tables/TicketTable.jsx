import React from 'react'
import { Table } from 'react-bootstrap'
const TicketTable = (props) => {
    const { tickets } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Open Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
            <tr key={index}>
                <td>{ticket.id}</td>
                <td>{ticket.Subject}</td>
                <td>{ticket.Status}</td>
                <td>{ticket.OpenDate}</td>            
            </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TicketTable