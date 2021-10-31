import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddTours.css';

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addTours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour Added Successfully!');
                    reset();
                }
            })
    };
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



    return (
        <div className="add-tours">
            <h3>Please Add a Tour</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("title", { required: true, maxLength: 20 })} placeholder="Destination" />
                <input  {...register("duration", { required: true, maxLength: 20 })} placeholder="Duration" />
                <textarea  {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Cost" />
                <input
                    {...register("img")} placeholder="Img URL" />
                <input type="submit" />
            </form>
        </div>
    );
};


export default AddTours;