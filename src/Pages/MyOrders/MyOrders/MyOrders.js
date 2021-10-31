import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MySingleOrder from "../MySingleOrder/MySingleOrder";

const MyOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch("https://chilling-village-47047.herokuapp.com/myorders")
            .then((res) => res.json())
            .then((data) => setBookedPackages(data));
    }, []);

    if (!bookedPackages) {
        <Spinner animation="border" variant="dark" />;
    }

    const myOrders = bookedPackages.filter((pack) => user.email === pack.email);
    console.log(myOrders);

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
                    {myOrders.map((myOrder) => (
                        <MySingleOrder
                            key={myOrder._id}
                            myOrder={myOrder}
                        ></MySingleOrder>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
