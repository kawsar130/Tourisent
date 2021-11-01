import React from "react";
import { Form, Button } from "react-bootstrap";
import "./NewsShelter.css";

const NewsShelter = () => {
    return (
        <div
            className="form-container p-5 my-5 border border-warning border-2 rounded bg-light"
            id="news"
        >
            <h2>Subscribe to our News-Shelter</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="form-input"
                        type="email"
                        placeholder="Enter your email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        className="form-input"
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
