import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
    return (
        <div className="faq-main-container" id="faq">
            <h2>Frequently Asked Question</h2>
            <div className="container faq-container py-5">
                <div>
                    <img
                        className="img-fluid"
                        src={"https://i.ibb.co/kG15XT3/faq.png"}
                        alt=""
                    />
                </div>
                <div>
                    <Accordion defaultActiveKey="0" className="container faq">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Who we are?</Accordion.Header>
                            <Accordion.Body>
                                BlueMediq is one of the largest Medical
                                Equipment Supplier company in Bangladesh. We are
                                passionate to work with humans health that will
                                make the live easier and trouble-free. We are
                                dedicated to assure you the best services in
                                medical equipment supplying, servicing, and
                                repairing.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                What products do your company offer?
                            </Accordion.Header>
                            <Accordion.Body>
                                BlueMediQ MEDICAL is the world's leading
                                high-tech manufacturing company committed to R
                                and D, production and marketing of medical and
                                healthcare protective devices including nitrile
                                gloves, face-masks, isolation gowns, surgical
                                gowns, protective coveralls, melt blown fabrics
                                and etc.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                What is the FDA's policy on medical gloves
                                during COVID-19?
                            </Accordion.Header>
                            <Accordion.Body>
                                The FDA issued a guidance document entitled
                                Enforcement Policy for Gowns, Other Apparel, and
                                Gloves During the Coronavirus Disease (COVID-19)
                                Public Health Emergency to provide a policy to
                                help expand the availability of these items for
                                health care professionals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                What do Nitrile gloves protect against?
                            </Accordion.Header>
                            <Accordion.Body>
                                Nitrile is waterproof, greaseproof, oil proof
                                and most importantly, chemical resistant to a
                                range of common chemicals and substances.
                                Nitrile gloves are also commonly used in the
                                medical industry due to their high puncture
                                resistance, and dexterous strength.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Where can I find product catalog downloads for
                                your products?
                            </Accordion.Header>
                            <Accordion.Body>
                                For BlueMediQ product catalog please see:
                                <a
                                    className="fw-bold"
                                    style={{ textDecoration: "none" }}
                                    href="https://www.medicalkingfa.com/products/i-8/"
                                >
                                    {" "}
                                    BlueMediQ Catalog
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                What is the current status of your nitrile
                                gloves' production?
                            </Accordion.Header>
                            <Accordion.Body>
                                BlueMediQ has a daily production capacity of
                                1,000,000 units per line. At the end of 2021,
                                BlueMediQ will have 96 functional production
                                lines, reaching a total daily production
                                capacity of over 100,000,000 units.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
