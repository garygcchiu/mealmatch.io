import React, { useState } from 'react';

import BannerShape from '../assets/images/shapes/banner-shape-1-1.png';
import BannerBG from '../assets/images/resources/banner-image-1-1.jpg';
import BannerMoc from '../assets/images/resources/main.png';

const Banner = () => {
    const [open, setOpen] = useState({
        isOpen: false,
    });
    const openModal = () => {
        setOpen({
            isOpen: true,
        });
    };

    return (
        <section className="banner-one" id="home">
            <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
            <div
                className="banner-one__bg"
                style={{ backgroundImage: `url(${BannerBG})` }}
            />
            <div className="container">
                <div className="banner-one__moc">
                    <img
                        src={BannerMoc}
                        className="wow fadeInUp"
                        data-wow-duration="1500ms"
                        alt=""
                    />
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <div className="mc-form__response" />
                            <h3>
                                The Answer To <br />
                                "What Do You <br />
                                Want To Eat?"
                            </h3>
                            <p>
                                Pick what cuisine you are feeling, and let us
                                handle the rest!
                            </p>
                            <a href="" className="thm-btn banner-one__btn">
                                <span>Coming Soon!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
