import React from 'react';
import BlockTitle from './BlockTitle';

const Services = () => {
    return (
        <section className="service-one" id="features">
            <div className="container">
                <BlockTitle
                    textAlign="center"
                    paraText=""
                    titleText={`Features`}
                />
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="service-one__single">
                            <div className="service-one__inner">
                                {/*<div className="service-one__circle"></div>*/}
                                <div className="service-one__icon">
                                    <i className="far fa-bread-loaf"></i>
                                </div>
                                <h3>Hundreds of Categories</h3>
                                <p>
                                    Choose among hundreds of cuisines that you
                                    are feeling.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-one__single">
                            <div className="service-one__inner">
                                <div className="service-one__circle"></div>
                                <div className="service-one__icon">
                                    <i className="far fa-user-friends" />
                                </div>
                                <h3>
                                    Compare with <br /> Friends and Groups
                                </h3>
                                <p>
                                    Find what the group, or your favorite
                                    person, is craving.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-one__single">
                            <div className="service-one__inner">
                                <div className="service-one__circle"></div>
                                <div className="service-one__icon">
                                    <i className="apton-icon-development1"></i>
                                </div>
                                <h3>Receive Nearby Restaurants</h3>
                                <p>
                                    Get local suggestions based on preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-one__single">
                            <div className="service-one__inner">
                                <div className="service-one__circle"></div>
                                <div className="service-one__icon">
                                    <i className="far fa-dollar-sign"></i>
                                </div>
                                <h3>Completely Free</h3>
                                <p>
                                    Pay for nothing, except for your actual
                                    food.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
