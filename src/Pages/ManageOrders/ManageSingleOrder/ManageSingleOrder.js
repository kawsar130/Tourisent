import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";

const ManageSingleOrder = (props) => {
    const { package_id, status } = props.manageOrder;
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    if (!packages) {
        <Spinner animation="border" variant="dark" />;
    }

    const manageOrderedPackage = packages.find(
        (pack) => pack._id === package_id
    );

    let name, price, img;

    if (manageOrderedPackage) {
        ({ name, price, img } = manageOrderedPackage);
    }

    return (
        <div>
            {!manageOrderedPackage ? (
                <div>
                    <h4>Loading. Please Wait...</h4>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <div className="single-order-container border bg-light text-start ps-2 py-2 rounded">
                    <div className="single-order-img-container">
                        <img className="single-order-img" src={img} alt="" />
                    </div>
                    <div className="my-order-text-container">
                        <div>
                            <p className="fw-bold">Package Name: {name}</p>
                            <p className="text-success">
                                Amount To be Paid: {price} BDT.
                            </p>
                            <p>Status: {status}</p>
                        </div>
                        <div className="single-order-button-container">
                            <Button variant="danger">Approve</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageSingleOrder;
