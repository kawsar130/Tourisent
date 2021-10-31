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
                            <Accordion.Header>
                                How many travellers will be there as part of a
                                group tour?
                            </Accordion.Header>
                            <Accordion.Body>
                                The number of travellers varies depending on the
                                destination. The usual group size for an
                                International tour is between 40 to 50 guests
                                and that for an Indian tour is between 30 to 40
                                guests. In the case of speciality tours, there
                                are chances that the number of travelling may
                                increase.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Can I extend my stay while on a group tour?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes, you can indeed extend your stay while on a
                                group tour. This extension of stay before or
                                after a tour would incur additional charges. You
                                can do it by informing your travel advisor at
                                the time of booking.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Does Tourisent book only Air Tickets?
                            </Accordion.Header>
                            <Accordion.Body>
                                Tourisent does not book only air tickets. When
                                you a book a group tour, Tourisent books the air
                                tickets that are part of the tour. In the case
                                of customized holidays, Tourisent will book the
                                air tickets when you decide to book a holiday
                                package i.e. Air + Hotel/Air + Hotel +
                                Sightseeing, etc.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Can I join a tour midway or are part tours
                                possible?
                            </Accordion.Header>
                            <Accordion.Body>
                                Part tours are possible only for select tours.
                                Any deviations from the planned tour itinerary
                                would incur additional charges. Should you wish
                                to do only a part tour or extend your stay
                                before or after a tour, you can check the
                                possibility by informing your travel advisor at
                                the time of booking.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Can I modify or change my booking after
                                confirmation?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes, in select cases, you have the option to
                                modify your booking after confirmation. However,
                                to do so, kindly consult your travel advisor.
                                Any such modifications would incur additional
                                charges.
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
