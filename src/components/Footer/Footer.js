import React from 'react';
import './Footer.css';
import logo from '../../Image/logo/logo.png';
// import iconT from '../../Image/icon/iconT';
const Footer = () => {
    return (
        <div>
            <div className="">
                <div className="footer-container mt-5 ">
                    <div className="row">
                        <div className="col-lg-4">

                            <img className="footer-logo" src={logo} alt="" />
                            {/* section-1 */}
                            <h5>All About Ghurbo </h5>
                            <p className="footer-description text-start">Ghurbo is one of the leading tourism service provider across the country. We help people to enjoy their leaisure time by planning their vacation with related services.</p>
                        </div>
                        <div className="col-lg-4 pt-4">
                            {/* section-2 */}
                            <h3>Follow Us</h3>
                            <ul className="footer-social-media">
                                <li> <img className="icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" /> FaceBook</li>

                                <li> <img className="icon-img" src="https://e1.pngegg.com/pngimages/589/288/png-clipart-clay-os-6-a-macos-icon-twitter-tweeter-icon-thumbnail.png" alt="" /> Tweeter</li>
                                <li> <img className="icon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncuHUeb1oOQuSdOmfg64FtTQiXAA-zB-L7OmyXjzlpc_jmf954S6UHr7ETO-jf9NMpPw&usqp=CAU" alt="" /> Instagram</li>
                            </ul>

                        </div>
                        <div className="col-lg-4 pt-4">
                            {/* section-3 */}
                            <h3>Contact Us</h3>
                            <p>Level-4, 34, Lg Tower, New York, USA <br />
                                Official: ghurbo@gmail.com <br />
                                Helpline : 22810867 (Available : 09:00am to 7:00pm)</p>
                        </div>


                    </div>
                </div>

                <div className="footer-end pb-3"> @ 2021. Ghurbo By Pokhbis. All Rights Resurved.</div>

            </div>
        </div>
    );
};

export default Footer;