import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddTours.css';
import { useHistory } from 'react-router';

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        fetch("https://serene-crag-84506.herokuapp.com/tours/addTours", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('http://localhost:5000/addTours', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Tour Added Successfully!');
    //                 reset();
    //             }
    //         })
    // };
    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('https://serene-crag-84506.herokuapp.com/tours', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Tour Added Successfully!');
    //                 reset();
    //             }
    //         })
    // };

    // const handleAddTours = () => {
    //     history.push('./tours')
    // }

    return (
        <div className="add-tours">
            <h3>Please Add a Tour</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("title", { required: true, maxLength: 20 })} placeholder="Destination" />
                <input  {...register("duration")} placeholder="Duration" />
                <textarea  {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Cost" />
                <input
                    {...register("img")} placeholder="Img URL" />
                <input type="submit" onClick={() => history.push('/tours')} />
            </form>
        </div>
    );
};


export default AddTours;