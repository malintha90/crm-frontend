import React from 'react'
import {Container, Row, Col, Form, Button } from 'react-bootstrap'

const Login = (props) => {
    const {handleEvent,loginDetails, handleSubmit} = props;
  
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-info text-center">Login</h2>
                    <hr/>
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Form.Group className="p-2">
                            <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Enter Email" 
                            required
                            onChange={handleEvent} 
                            value={loginDetails.email}/>
                        </Form.Group>
                        <Form.Group className="p-2">    
                            <Form.Control type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            required
                            onChange={handleEvent} 
                            value={loginDetails.password}/>
                        </Form.Group>
                        <Form.Group className="p-2">
                            <Button>Login</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login