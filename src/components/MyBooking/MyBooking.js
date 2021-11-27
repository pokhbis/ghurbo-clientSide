import React, { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);

    const email = "prokash748@gmail.com";
    // const { email } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/addBooking/${email}`)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [email]);
    console.log(bookings);
    return (
        <div>
            <h1>Your Dashboard</h1>
            <h3>I booked: {bookings.length}</h3>
            <div className="all-products">
                <div className="row container text-center">
                    {bookings?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className=" border border p-2 m-2">
                                <h4>{pd.email}</h4>
                                <h5>{pd?.name}</h5>
                                <h5>{pd?.price}</h5>
                                <h6>{pd?.description}</h6>
                                <button className="btn btn-danger m-2">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;