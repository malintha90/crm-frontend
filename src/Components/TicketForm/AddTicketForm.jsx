import React from 'react'
import { useState } from 'react'
import { Form, Button,Card, Row } from 'react-bootstrap'


const AddTicketForm = () => {
const [form, setForm] = useState({
    subject: '',
    issueFoundAt: '',
    details: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(form)
  }

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '2rem' }}>
      <Card style={{ width: '400px' }} className="shadow"
      >
        <Card.Body>
          <Card.Title className="mb-4 text-center">Create Ticket</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formSubject">
              <Form.Label >Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formIssueFoundAt">
              <Form.Label >Issue Found At</Form.Label>
              <Form.Control
                type="date"
                name="issueFoundAt"
                placeholder="Where did you find the issue?"
                value={form.issueFoundAt}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formDetails">
              <Form.Label >Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                placeholder="Describe the issue in detail"
                value={form.details}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="info" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddTicketForm