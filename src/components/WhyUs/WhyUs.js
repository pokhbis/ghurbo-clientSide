import React from 'react';
import './WhyUs.css';
import iconA from '../../Image/expIcon/handshake-removebg-preview.png';
import iconB from '../../Image/expIcon/guide-1-removebg-preview.png';
import iconC from '../../Image/expIcon/travelexp-removebg-preview.png';
import iconD from '../../Image/expIcon/traveller-2-removebg-preview.png';

const WhyUs = () => {
    return (
        <div className="why-section">
            <div>
                <div className="pt-5 pb-3">

                    <h2 className="why-title">Why Ghurbo</h2>
                    <h5 className="why-text">Why You Should Plan With Ghurbo</h5>
                </div>
                <div className="container">
                    <div className="row pb-4 cart-row mx-3">
                        <div className="col-lg-3 col-md-6 icon-cart py-2">
                            <div className="">
                                <img className="icon-size" src={iconA} alt="" />
                            </div>
                            {/* section-1 */}
                            <h4>100% Trusted Agency</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart py-2 ">
                            <div className="">
                                <img className="icon-size" src={iconB} alt="" />
                            </div>
                            {/* section-2 */}
                            <h4>200+ Guide</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart ">
                            <div className="">
                                <img className="icon-size" src={iconD} alt="" />
                            </div>
                            {/* section-3*/}
                            <h4>99% Traveller Satisfaction</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart ">
                            <div className="">
                                <img className="icon-size" src={iconC} alt="" />
                            </div>
                            {/* section-4 */}
                            <h4>8+ Years Experience</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;