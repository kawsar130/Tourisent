import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./Header.css";
// font awesome importing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                sticky="top"
                bg="dark"
                variant="dark"
                collapseOnSelect
                expand="lg"
            >
                <Container>
                    <Navbar.Brand
                        as={NavHashLink}
                        className="nav-text"
                        to="/home"
                    >
                        Tourisent
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            as={HashLink}
                            to="/home#home"
                            className="nav-text"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={HashLink}
                            to="/home#services"
                            className="nav-text"
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={HashLink}
                            to="/packages"
                            className="nav-text"
                        >
                            Packages
                        </Nav.Link>
                        <Nav.Link
                            as={HashLink}
                            to="/about"
                            className="nav-text"
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={HashLink}
                            to="/home#faq"
                            className="nav-text"
                        >
                            FAQ
                        </Nav.Link>
                        {user?.email ? (
                            <div className="user-info">
                                <Nav.Link
                                    as={HashLink}
                                    to="/addpackage"
                                    className="nav-text"
                                >
                                    Add-Package
                                </Nav.Link>
                                <Nav.Link
                                    as={HashLink}
                                    to="/myorder"
                                    className="nav-text"
                                >
                                    My-Order
                                </Nav.Link>
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    className="user-img mx-2"
                                />
                                <Navbar.Text className="me-3">
                                    <h6>{user?.displayName}</h6>
                                </Navbar.Text>
                                <Button
                                    onClick={logOut}
                                    className="btn btn-warning text-white btn-logout"
                                >
                                    {logoutIcon}
                                </Button>
                            </div>
                        ) : (
                            <Nav.Link
                                as={Link}
                                to="/login"
                                className="text-white nav-text"
                            >
                                Login
                            </Nav.Link>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
