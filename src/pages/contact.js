import React from "react";
import { Form, Button } from 'react-bootstrap';
import PrimaryLayout from '../Layout/PrimaryLayout';

const contact = () => (
    <PrimaryLayout col="col-10">
        <Form>
            <Form.Group className="mb-3" controlId="contactForm.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.Message">
                <Form.Label>Message</Form.Label>
                <Form.Control type="email" placeholder="Message..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.Description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.Description">
                <Button>Submit</Button>
            </Form.Group>
        </Form>
    </PrimaryLayout>

);

export default contact;