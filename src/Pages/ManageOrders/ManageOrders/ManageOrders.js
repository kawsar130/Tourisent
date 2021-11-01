import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageSingleOrder from "../ManageSingleOrder/ManageSingleOrder";

const ManageOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/manageOrders")
            .then((res) => res.json())
            .then((data) => setBookedPackages(data));
    }, [bookedPackages]);

    // Handling delete
    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure to cancel?");
        if (confirmation) {
            fetch(`http://localhost:5000/manageorders/delete/${id}`, {
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

    return (
        <div>
            {!bookedPackages.length ? (
                <div style={{ height: "50vh" }}>
                    <h1 className="mt-5">No Orders found!</h1>
                </div>
            ) : (
                <div className="booked-container container mb-5">
                    <h1 className="mt-5 border border-5 p-3 w-75 mx-auto rounded">
                        Admin Panel
                    </h1>
                    <h2 className="mb-2 mt-5">All Booked Packages</h2>
                    {deleteCount ? (
                        <p>Order deleted Successfully</p>
                    ) : (
                        <p>Manage all orders from here.</p>
                    )}
                    {bookedPackages.map((manageOrder) => (
                        <ManageSingleOrder
                            key={manageOrder._id}
                            manageOrder={manageOrder}
                            handleDelete={handleDelete}
                        ></ManageSingleOrder>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageOrders;
