import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
            <h2>Most Popular Packages</h2>
            <div className="package-container container">
                {packages.map((pack) => (
                    <SinglePackage key={pack._id} pack={pack}></SinglePackage>
                ))}
            </div>
        </div>
    );
};

export default PopularPackages;
