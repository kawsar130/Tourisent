import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MySingleOrder from "../MySingleOrder/MySingleOrder";

const MyOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/myorders")
            .then((res) => res.json())
            .then((data) => setBookedPackages(data));
    }, []);
    return (
        <div>
            <h2 className="mb-2 mt-5">Here is your Booked Packages.</h2>
            {!bookedPackages.length ? (
                <div style={{ height: "50vh" }}>
                    <p className="fs-5 fw-bold">Loading! Please Wait...</p>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <div className="booked-container container p-5">
                    {bookedPackages.map((bookedPackage) => (
                        <MySingleOrder
                            key={bookedPackage._id}
                            bookedPackage={bookedPackage}
                        ></MySingleOrder>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
