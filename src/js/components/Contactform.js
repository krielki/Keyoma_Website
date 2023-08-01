import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';

const Forms = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Form>
            <h4 className="text-center"> Contact us </h4>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="select">
                <option>New Booking Enquiry</option>
                <option>Existing Booking Enquiry</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Send me a copy of this message" />
            </Form.Group>
            <Button variant="dark" type="submit" block>
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Forms;
