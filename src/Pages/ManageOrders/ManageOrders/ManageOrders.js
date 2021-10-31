import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageSingleOrder from "../ManageSingleOrder/ManageSingleOrder";

const ManageOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    useEffect(() => {
        fetch("https://chilling-village-47047.herokuapp.com/manageOrders")
            .then((res) => res.json())
            .then((data) => setBookedPackages(data));
    }, []);

    if (!bookedPackages) {
        <Spinner animation="border" variant="dark" />;
    }

    return (
        <div>
            <h2 className="mb-2 mt-5">All Booked Packages</h2>
            {!bookedPackages.length ? (
                <div style={{ height: "50vh" }}>
                    <p className="fs-5 fw-bold">Loading! Please Wait...</p>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <div className="booked-container container p-5">
                    {bookedPackages.map((manageOrder) => (
                        <ManageSingleOrder
                            key={manageOrder._id}
                            manageOrder={manageOrder}
                        ></ManageSingleOrder>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageOrders;
