import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./Banner.css";

const Banner = () => {
    return (
        <Carousel className="pb-5 carousel-container" fade id="home">
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block carousel-img"
                    src="https://i.ibb.co/yFD9WFS/banner1.jpg"
                    alt=""
                />
                <Carousel.Caption className="carousel-caption">
                    <h3 className="banner-title">Make Some Memory of Life!</h3>
                    <p className="banner-description">
                        Memory is a part of life. Make some good memory with us.
                    </p>
                    <Button variant="warning" size="lg">
                        <NavHashLink
                            as={HashLink}
                            to="/home#popularPackages"
                            className="text-white"
                        >
                            Book a Tour
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item carousel-item>
                <img
                    className="d-block carousel-img"
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
                            to="/home#faq"
                            className="text-white"
                        >
                            Check FAQ!
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item carousel-item>
                <img
                    className="d-block carousel-img"
                    src="https://i.ibb.co/cbvW2LS/banner3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3 className="banner-title">Stay Optimistic!</h3>
                    <p className="banner-description">
                        We care for your best moment. Subscribe to our news
                        shelter to know the perfect travelling time when you
                        need to.
                    </p>
                    <Button variant="warning" size="lg">
                        <NavHashLink
                            as={HashLink}
                            to="/home#news"
                            className="text-white"
                        >
                            Subscribe
                        </NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
