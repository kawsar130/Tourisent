import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackage.css";

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://chilling-village-47047.herokuapp.com/packages", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Custom Package added successfully");
                    reset();
                }
            });
    };
    return (
        <div className="add-package my-5 rounded">
            <h2 className="mb-4">You can add your custom package form here:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: true,
                        maxLength: 30
                    })}
                    placeholder="Package Name"
                />
                <textarea
                    {...register("overview", { required: true })}
                    placeholder="Package Short Description"
                />
                <textarea
                    {...register("description")}
                    placeholder="Package Detailed Description"
                />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Price in BDT"
                />
                <input {...register("img")} placeholder="Hosted Image link" />
                <input className="input-submit rounded" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;
