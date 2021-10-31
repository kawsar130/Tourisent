import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import SinglePackage from "../SinglePackage/SinglePackage";
import "./PopularPackages.css";

const PopularPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    return (
        <div id="packages">
            <h2 className="mb-3">Most Popular Packages</h2>
            {!packages.length ? (
                <div style={{ height: "50vh" }}>
                    <p className="fs-5 fw-bold">Loading! Please Wait...</p>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <div className="package-container container p-5">
                    {packages.map((pack) => (
                        <SinglePackage
                            key={pack._id}
                            pack={pack}
                        ></SinglePackage>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularPackages;
