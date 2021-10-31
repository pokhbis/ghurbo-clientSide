import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import useAuth from '../Hook/useAuth';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
    };

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