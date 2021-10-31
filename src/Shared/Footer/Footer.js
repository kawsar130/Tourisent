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
                <Col xs={12} sm={3} className="services-footer">
                    <h5>Services</h5>
                    <p>Travel Consultancy</p>
                    <p>Travel Agency</p>
                    <p>Customizable Travel Package</p>
                </Col>
                <Col xs={12} sm={6}>
                    <h5>Tourisent</h5>
                    <p>
                        There's more to life than the robotic lifestyle we all
                        live these days. From a never-ending list to choose
                        from, you can select your go-to trip trail and customize
                        it according to your preferences. Revamp your bucket
                        list and give wings to your dreamy destinations.
                        Liberating in the delightful international travel
                        destinations is no more a task. Give yourself a break
                        from the monotonous life, explore the breath-taking
                        beauty through international tourism guide with
                        Tourisent.
                    </p>
                </Col>
                <Col xs={12} sm={3}>
                    <h5>Contact</h5>
                    <p>Mobile: 01700-000000</p>
                    <p>Email: tourisent@gmail.com</p>
                    <p>Mirpur 2, Dhaka 1216</p>
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
