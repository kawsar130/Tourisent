import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />;
    const twitter = <FontAwesomeIcon icon={faTwitter} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
    const instagram = <FontAwesomeIcon icon={faInstagram} />;
    return (
        <div className="container-fluid bg-dark text-white p-5">
            <Row>
                <Col xs={12} sm={3}>
                    <h5>Services</h5>
                    <p>Medical Equipment Supply</p>
                    <p>Medical Equipment Repair</p>
                    <p>Equipment Importer</p>
                </Col>
                <Col xs={12} sm={3}>
                    <h5>About</h5>
                    <p>Company</p>
                    <p>Team</p>
                    <p>Career</p>
                </Col>
                <Col xs={12} sm={6}>
                    <h5>BlueMediq</h5>
                    <p>
                        BlueMediq is one of the largest Medical Equipment
                        Supplier company in Bangladesh. We are passionate to
                        work with humans health that will make the live easier
                        and trouble-free. We are dedicated to assure you the
                        best services in medical equipment supplying, servicing,
                        and repairing.
                    </p>
                </Col>
            </Row>
            <div>
                <div className="fs-3 p-2 mt-5 icons">
                    <small className="px-4">{facebook}</small>
                    <small className="px-4">{twitter}</small>
                    <small className="px-4">{linkedin}</small>
                    <small className="px-4">{instagram}</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
