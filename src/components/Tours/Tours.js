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
    const redirect_uri = location.state?.from || '/booking';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

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
                            tours.map((tour, index) => <Tour
                                key={tour.key}
                                tour={tour}
                                handleGoogleLogin={handleGoogleLogin}
                            >
                            </Tour>
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