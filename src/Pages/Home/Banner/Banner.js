import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./Banner.css";

const Banner = () => {
    return (
        <Carousel className="pb-5" fade id="home">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/yFD9WFS/banner1.jpg"
                    alt="Medical Equipment"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3 className="banner-title">Equipment that Human need.</h3>
                    <p className="banner-description">
                        We provide human life supports in emergency.
                    </p>
                    <Button variant="warning" size="lg">
                        <NavHashLink
                            as={HashLink}
                            to="/products"
                            className="text-white"
                        >
                            Shop Now
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Cbk4ksL/banner2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3 className="banner-title">Best in Services</h3>
                    <p className="banner-description">
                        We never compromise with the quality of Services.
                    </p>
                    <Button variant="warning" size="lg">
                        <NavHashLink
                            as={HashLink}
                            to="/home#services"
                            className="text-white"
                        >
                            Check Services
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/cbvW2LS/banner3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3 className="banner-title">
                        Technology that make Sense!
                    </h3>
                    <p className="banner-description">
                        We use the latest and optimistic technology that helps
                        to be accurate and concise.
                    </p>
                    <Button variant="warning" size="lg">
                        <NavHashLink
                            as={HashLink}
                            to="/about"
                            className="text-white"
                        >
                            Know more About Us!
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
