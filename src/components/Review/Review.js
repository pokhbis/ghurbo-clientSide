import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';
const Review = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="pt-5 pb-3">

                        <h2 className="review-title">Our Travellers Stories/Review</h2>
                        <p className="review-title-text">Read what our travellers say about their fantastic experiences and how our services help them to enjoy the vacation most.
                            <br /> You can also enjoy your leisure like them with us and it will be a life time experiences.</p>
                    </div>
                    <div className=" container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 blog-card ">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://jooinn.com/images/human-21.jpg" alt="" />
                                </div>
                                {/* section-1 */}
                                <h4>Amazing Vacation Spent</h4>
                                <p>Our trip to Morocco was truly a once-in-a-lifetime experience and we are so grateful to everyone that made it happen seamlessly.Jaouad designed a tour perfectly custom to what our interests were</p>
                                <Link to={'/'}><button className="review-btn mb-2">Read More</button></Link>
                            </div>
                            <div className="col-lg-3 col-md-6 blog-card">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://assets.rbl.ms/26144683/origin.jpg" alt="" />
                                </div>
                                {/* section-2 */}
                                <h4>Was My Fovourite</h4>
                                <p>Fantastic! Our Costa Rica travel company took care of everything. The owner and his wife met us at the airport with a care package of coffee and chocolate. Our drivers to and from the resort were great. </p>
                                <Link to={'/'}><button className="review-btn mb-2">Read More</button></Link>
                            </div>
                            <div className="col-lg-3 col-md-6 blog-card">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJzO2mlwOox0U3Q1AwhNLkMkC6-9kCQwcnudAmss-NBrM8V6FCqrZBONiBwbZsm4SAS8&usqp=CAU" alt="" />
                                </div>
                                {/* section-3*/}
                                <h4>Best Tour Enjoyed</h4>
                                <p>Amazing Honeymoon to Crete. Our travel specialist met and exceeded our expectations at every moment. Now they were not waiting on us hand and foot, and we did not want that </p>
                                <Link to={"/"}><button className="review-btn mb-2">Read More</button></Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Review;