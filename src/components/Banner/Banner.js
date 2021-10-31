import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Image/Banner/banner-1.jpg';
import banner2 from '../../Image/Banner/banner-2.jpg';
import banner3 from '../../Image/Banner/banner-3.jpg';

const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore The Beauty of Sea!</h3>
                        <p>Ocean tourism refers to pleasure travel in which the sea is the primary focus of activities. Ocean tourism comes in many forms including cruises, ecotourism, and fishing expeditions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore The Beauty of Mountain!</h3>
                        <p>Mountain Tourism is limited geographical space such as hills or mountains with distinctive characteristics and  a specific landscape, topography, climate, biodiversity (flora and fauna) and local community.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore The Beauty of Mountain!</h3>
                        <p>Mountain Tourism is limited geographical space such as hills or mountains with distinctive characteristics and  a specific landscape, topography, climate, biodiversity (flora and fauna) and local community.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner; <h3>banner</h3>