import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Tour from '../Tour/Tour';
import './Tours.css';

const Tours = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { email } = useAuth();
    const redirect_uri = location.state?.from || '/booking';

    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }

    const [tours, setTours] = useState([]);

    useEffect(() => {

        fetch("https://serene-crag-84506.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => setTours(data))

    }, [])

    //     fetch("./data.json")
    //         .then(res => res.json())
    //         .then(data => setTours(data))

    // }, [])

    const handleBooking = (index) => {
        console.log(index);
        const data = tours[index];
        data.email = email;
        data.status = "panding"
        fetch('http://localhost:5000/addBooking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        });

    };

    return (
        <div>

            <div className="services container mt-5">
                <div className="services-top">
                    <h1 className="review-title">Popular Tours</h1>

                    <h6>Our team of experts are here to help people find the best way to enjoy their leisure time. We help people finding and planning their vacations.<br /> We provide all around services so that you can enjoy fully without any problems.</h6>

                </div>
                <div className="services-card mt-5">
                    <div className="row">
                        {
                            tours.map((tour, index) => <div className="col-md-6 col-lg-4">
                                <div className="card p-3 m-2 border border">
                                    <div className="">
                                        <img className="card-img" src={tour.img} alt="" />
                                    </div>
                                    <h3>
                                        {tour.title}
                                    </h3>
                                    <h6>Duration: {tour.info}</h6>
                                    <p>{tour.description}</p>
                                    <div className="row">
                                        <div className="col-md-9 col-lg-9">
                                            <div><Link to='/login'>
                                                <button className="book-btn" onClick={() => handleBooking(index)}>Book</button>
                                            </Link>
                                            </div>
                                            {/* <div><Link to={`/booking/${tour.title}`}>
                                        <button className="book-btn" onClick={handleGoogleLogin}>Book</button>
                                    </Link>
                                    </div> */}

                                        </div>
                                        <div className=" tour-price pt-2 col-md-3 col-lg-3"> $ {tour.price}</div>

                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>

                <div>

                </div>
            </div>

            {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}
        </div>
    );
};

export default Tours;