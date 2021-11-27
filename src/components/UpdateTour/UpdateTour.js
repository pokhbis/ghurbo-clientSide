import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router";
const UpdateTour = () => {
    const { tourId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`https://serene-crag-84506.herokuapp.com/tours/singleProduct/${tourId}`)
            .then((res) => res.json())
            .then((data) => setTour(data));
    }, [tourId, isUpdate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch(`https://serene-crag-84506.herokuapp.com/tours/update/${tourId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
    };
    return (
        <div>
            <h2>Updated Tourist Spot: {tour.title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    className="p-2 m-2"
                    defaultValue={tour?.title}
                    {...register("name")}
                    required placeholder="Title"
                />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="p-2 m-2"
                    type="text"
                    defaultValue={tour?.description}
                    {...register("email", { required: true })}
                    required
                    placeholder="description"
                />
                <input
                    className="p-2 m-2"
                    type="text"
                    defaultValue={tour?.price}
                    {...register("email", { required: true })}
                    required
                    placeholder="price"
                />
                <input
                    className="p-2 m-2"
                    type="text"
                    defaultValue={tour?.img}
                    {...register("email", { required: true })}
                    required
                    placeholder="Img URL"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-primary mt-4 w-20" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateTour;