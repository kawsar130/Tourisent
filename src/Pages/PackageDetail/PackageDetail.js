import React, { useEffect, useState } from "react";
import { Card, Spinner, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./PackageDetail.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PackageDetail = () => {
    const [form, setForm] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { packageId } = useParams();
    const [packages, setPackages] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch("https://chilling-village-47047.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    if (!packages) {
        <Spinner animation="border" variant="dark" />;
    }
    const foundPackage = packages.find((x) => x._id === packageId);

    let _id, name, overview, description, img, price;

    if (foundPackage) {
        ({ _id, name, overview, description, img, price } = foundPackage);
    }

    const package_id = _id;
    const status = "Pending";

    // react hook form contents
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        setForm(data);
        axios
            .post("https://chilling-village-47047.herokuapp.com/orders", {
                ...data,
                package_id,
                status
            })
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Added ID" + res.data.insertedId);
                    reset();
                    setIsSubmitted(true);
                }
            });
    };

    return (
        <div>
            <Card className="text-center m-5 w-50 mx-auto" border="info">
                <Card.Header className="fw-bold">
                    Package Name: {name}
                </Card.Header>
                <Card.Img variant="top" className="w-100 m-auto" src={img} />
                <Card.Body>
                    <Card.Text className="fw-bold text-danger">
                        Overview: {overview}
                    </Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="fw-bold">
                    Package Price: {price} Taka
                </Card.Footer>
                <div className="package-detail container p-5 my-5 rounded">
                    <h2 className="mb-4">Fill-up this form for Booking</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name", {
                                required: true,
                                maxLength: 30
                            })}
                            placeholder="Package Name"
                            value={user.displayName}
                        />
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Your Email"
                            value={user.email}
                        />
                        <input
                            {...register("mobile", {
                                required: true,
                                maxLength: 20
                            })}
                            placeholder="Mobile Number (with country code)"
                        />
                        <textarea
                            {...register("address")}
                            placeholder="Your full address"
                        />
                        <input
                            type="number"
                            {...register("zip")}
                            placeholder="Zip Code"
                        />
                        <input
                            className="input-submit rounded"
                            type="submit"
                            value="Confirm Booking"
                        />

                        {isSubmitted ? (
                            <div className="container">
                                <Table striped bordered hover className="mt-5">
                                    <thead>
                                        <tr>
                                            <th colspan="4">Booking Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Passenger Name:</td>
                                            <td> {form.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>{form.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile:</td>
                                            <td>{form.mobile}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>{form.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Zip:</td>
                                            <td>{form.zip}</td>
                                        </tr>
                                        <tr>
                                            <td>Package Booked:</td>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td>Amount to be Paid:</td>
                                            <td>{price}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p className="fw-bold fs-4">
                                    Congratulation! Your order has placed.
                                </p>
                            </div>
                        ) : (
                            <p className="fw-bold">
                                Please Fill up the Form and Submit to get your
                                your Booking receipt.
                            </p>
                        )}
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default PackageDetail;
