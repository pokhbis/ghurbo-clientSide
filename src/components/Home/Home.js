import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import useAuth from '../Hook/useAuth';
import Review from '../Review/Review';
import Tours from '../Tours/Tours';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            {/* <h4>This is :{user.displayName}</h4> */}
            <Banner></Banner>
            <Tours></Tours>
            <WhyUs></WhyUs>
            <Review></Review>
            <Comments></Comments>
        </div>
    );
};

export default Home;