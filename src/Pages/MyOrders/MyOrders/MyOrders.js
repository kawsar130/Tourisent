import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MySingleOrder from "../MySingleOrder/MySingleOrder";
import "./MyOrders.css";

const MyOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/myorders")
            .then((res) => res.json())
            .then((data) => setBookedPackages(data));
    }, [bookedPackages]);

    // Handling delete
    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure to cancel?");
        if (confirmation) {
            fetch(`http://localhost:5000/myorders/delete/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => res.json())
                .then((result) => setDeleteCount(result));
        }
    };

    if (!bookedPackages) {
        <Spinner animation="border" variant="dark" />;
    }

    const myOrders = bookedPackages.filter((pack) => user.email === pack.email);
    console.log(myOrders);

    return (
        <div>
            {!bookedPackages.length ? (
                <div style={{ height: "50vh" }}>
                    <h1 className="mt-5">No Orders found!</h1>
                </div>
            ) : (
                <div className="booked-container container mb-5">
                    <h2 className="mb-2 mt-5">Here is your Booked Packages.</h2>
                    {deleteCount ? (
                        <p>Order Cancelled Successfully</p>
                    ) : (
                        <p>Manage your orders from here.</p>
                    )}
                    {myOrders.map((myOrder) => (
                        <MySingleOrder
                            key={myOrder._id}
                            myOrder={myOrder}
                            handleDelete={handleDelete}
                        ></MySingleOrder>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
