import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
       <>
        <section className="pricing-container" id="pricing">
            <h2 className="section-title mb-5 text-center text-light">Choose Your Dedicated Team</h2>
            <div className="row">
                <div className="col-12 col-md-4 p-5">
                    <div class="card p-3">
                        <div class="card-body">
                            <div className="text-center">
                                <h1 class="card-title">$199</h1>
                                <h6 className="price-tag">For Basic</h6>
                            </div>
                            <p class="card-text text-center global-list p-3">
                                <ul className="pr-4 container-fluid">
                                    <li><h6>Homepage</h6></li>
                                    <li><h6>No Inner Page</h6></li>
                                    <li><h6>Asset file</h6></li>
                                    <li><h6>Source file</h6></li>
                                    <li><h6>Free Stock Photos</h6></li>
                                    <li><h6>10 Days Free Support</h6></li>
                                    <li><h6>24/7 Support</h6></li>
                                </ul>
                            </p>
                            <div className="pricing-btn">
                                <button id="" className="global-btn">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <div class="card p-3">
                        <div class="card-body">
                                <div className="text-center">
                                    <h1 class="card-title">$399</h1>
                                    <h6 className="price-tag">For Preferred</h6>
                                </div>
                                <p class="card-text text-center global-list p-3">
                                    <ul className="pr-4 container-fluid">
                                        <li><h6>Homepage</h6></li>
                                        <li><h6>4 Inner Pages</h6></li>
                                        <li><h6>Asset file</h6></li>
                                        <li><h6>Source file</h6></li>
                                        <li><h6>Free Stock Photos</h6></li>
                                        <li><h6>20 Days Free Support</h6></li>
                                        <li><h6>24/7 Support</h6></li>
                                    </ul>
                                </p>
                                <div className="pricing-btn">
                                    <button id="" className="global-btn">Order Now</button>
                                </div>
                            </div>                                           
                        </div>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <div class="card p-3">
                        <div class="card-body">
                            <div className="text-center">
                                <h1 class="card-title">$599</h1>
                                <h6 className="price-tag">For Elite</h6>
                            </div>
                            <p class="card-text text-center global-list p-3">
                                <ul className="pr-4 container-fluid">
                                    <li><h6>Homepage</h6></li>
                                    <li><h6>8 Inner Pages</h6></li>
                                    <li><h6>Asset file</h6></li>
                                    <li><h6>Source file</h6></li>
                                    <li><h6>Free Stock Photos</h6></li>
                                    <li><h6>30 Days Free Support</h6></li>
                                    <li><h6>24/7 Support</h6></li>
                                </ul>
                            </p>
                            <div className="pricing-btn">
                                <button id="" className="global-btn">Order Now</button>
                            </div>
                        </div>                                
                    </div>
                </div>
            </div>    

        </section>
       </>
    );
};

export default Pricing;