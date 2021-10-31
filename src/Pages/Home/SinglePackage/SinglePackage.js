import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackage.css";

const SinglePackage = ({ pack }) => {
    const { _id, name, overview, price, img } = pack;

    return (
        <Card className="single-card rounded">
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body>
                <Card.Title className="fs-4">{name}</Card.Title>
                <Card.Text>{overview}</Card.Text>
                <Card.Title className="fs-5">BDT: {price} Taka</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Link to={`/package/${_id}`}>
                    <Button variant="warning" className="fw-bold text-white">
                        Know more and Book
                    </Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default SinglePackage;
