import React from 'react';
import './Contact.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall} from '@fortawesome/free-solid-svg-icons';




const Contact = () => {
    return (
    <>
        <section className="contact-container text-center" id="contact-us">

            <div className="contact-header mb-5 mt-5">
                <h2 className="section-title">Get your design right, right now</h2>
                <p style={{color:'gray'}}>Be the first know our latest offers and updates!</p>
            </div>
            <div className="mt-5 search-bar">
                    <input type="text" className="input-p" name="" id="" placeholder="Your email address"/>
                    <button className="contact-btn">Get Started</button>
            </div>
            <div className="container-fluid footer-body">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} alt=""/>

                        <div className="icon-part d-flex justify-content-center">
                            <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faFacebook}/></Link>
                            <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faTwitter}/></Link>
                            <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faLinkedinIn}/></Link>
                            <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faBasketballBall}/></Link>
                            <Link to="/#"><FontAwesomeIcon className="icon-item" icon={faBehance}/></Link>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="footer-item">
                                    <li><Link className="nav-link" to="#">Features</Link></li>
                                    <li><Link className="nav-link" to="#">Enterprise</Link></li>
                                    <li><Link className="nav-link" to="#">Pricing</Link></li>
                                </ul>

                            </div>
                            <div className="col-md-4">
                                <ul className="footer-item">
                                    <li><Link className="nav-link" to="#">Blog</Link></li>
                                    <li><Link className="nav-link" to="#">Help Center</Link></li>
                                    <li><Link className="nav-link" to="#">Contact Us</Link></li>
                                    <li><Link className="nav-link" to="#">Status</Link></li>
                                </ul>

                            </div>
                            <div className="col-md-4">
                                <ul className="footer-item">
                                    <li><Link className="nav-link" to="#">About Us</Link></li>
                                    <li><Link className="nav-link" to="#">Terms of Service</Link></li>
                                    <li><Link className="nav-link" to="#">Security</Link></li>
                                    <li><Link className="nav-link" to="#">Login</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </section>
    </>
    );
};

export default Contact;