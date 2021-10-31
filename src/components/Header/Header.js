import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import './Header.css';
import logo from '../../Image/logo/logo.png';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header-container">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <img className="logo-img pt-2" src={logo} alt="" />

                    </div>

                    <div className="col-md-10">

                        <div className="header-items">
                            {/* header navbar  options*/}
                            <ul className="d-flex align-items-end justify-content-end pt-4 me-5">
                                <Link to="/home" className="item">Home</Link>
                                <Link to="/booking" className="item">Booking</Link>
                                <Link to="/review" className="item">Our Stories</Link>
                                {/* <Link to="/review" className="item">Review</Link> */}

                                <span style={{ color: "blue ", fontWeight: "bold", paddingBottom: "10px" }}>{user.displayName}</span>

                                {user?.email && <Link to='/myBooking' className="item" onClick="">MyBooking</Link>}
                                {user?.email && <Link to='/addTours' className="item" onClick="">AddTours</Link>}

                                {
                                    user?.email ?
                                        // <button onClick={logOut} className="item">Logout</button>
                                        <Link to="/home" onClick={logout} className="item">Logout</Link>

                                        :
                                        <Link to="/login" className="item">Login</Link>
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     {/* <div><img src={} alt="" /></div> */}
        //     <Link to="/home">Home</Link>
        //     <Link to="/booking">Booking</Link>
        //     <Link to="/blog">Blog</Link>
        //     <Link to="/login">Login</Link>
        //     {/* <Link to="/logout">Logout</Link> */}
        //     <span>{user.displayName}</span>
        //     {user?.email && <button onClick={logout}>Logout</button>}
        // </div>
    );
};

export default Header;