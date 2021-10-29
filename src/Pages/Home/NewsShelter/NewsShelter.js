import React from "react";
import { Form, Button } from "react-bootstrap";

const NewsShelter = () => {
    return (
        <div className="container w-50 p-5 my-5 border border-warning border-2 rounded bg-light">
            <h2>Subscribe to our News-Shelter</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3 text-start"
                    controlId="formBasicCheckbox"
                >
                    <Form.Check
                        type="checkbox"
                        label="Send me latest blogs weekly"
                    />
                </Form.Group>
                <Button variant="warning" size="lg" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default NewsShelter;
