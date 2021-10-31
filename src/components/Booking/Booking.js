import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import axios from 'axios';
import useAuth from '../Hook/useAuth';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/myBooking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour Added Successfully!');
                    reset();
                }
            })
    };



    // const { register, handleSubmit, reset } = useForm();
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





    const handleBooking = () => {
        history.push('./bookingSuccess')
    }
    return (
        <div >
            <h4>Provide Your Info For Booking</h4>
            <div className="booking">
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    {/* <input placeholder="City" defaultValue="" {...register("city")} /> */}
                    <input placeholder="City" defaultValue="" {...register("country")} />
                    <input placeholder="Phone Number" defaultValue="" {...register("phone ")} />

                    {errors.email && <span className="error">Email is required</span>}

                    <input onClick={() => handleBooking()} type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Booking;