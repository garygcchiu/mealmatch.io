import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SwiperCore, { Pagination } from 'swiper';
import Swiper from 'react-id-swiper';
import BlockTitle from './BlockTitle';

import appImage3 from '../assets/images/app-shots/3.webp';
import appImage4 from '../assets/images/app-shots/4.webp';
import appImage5 from '../assets/images/app-shots/5.webp';
import appImage6 from '../assets/images/app-shots/6.webp';
import appImage7 from '../assets/images/app-shots/7.webp';
import appImage8 from '../assets/images/app-shots/8.webp';
import appImage9 from '../assets/images/app-shots/9.webp';
import appImage10 from '../assets/images/app-shots/10.webp';
import appImage11 from '../assets/images/app-shots/11.webp';
import appImage12 from '../assets/images/app-shots/12.webp';

SwiperCore.use([Pagination]);

const AppScreen = (props) => {
    const params = {
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true',
        },
        slidesPerView: 5,
        rebuildOnUpdate: true,
        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },
            767: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
            991: {
                slidesPerGroup: 2,
                slidesPerView: 3,
            },
            1499: {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },
        },
    };
    return (
        <section className="app-shot-one" id="screens">
            <Container fluid>
                <BlockTitle
                    textAlign="center"
                    paraText="Screenshots"
                    titleText={'When it Comes to Food, Looks Matter'}
                />
                <div className="app-shot-one__carousel">
                    <Swiper {...params}>
                        {/* page 1 */}
                        <div className="item">
                            <img src={appImage5} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage8} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage11} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage12} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage3} alt="Screenshot" />
                        </div>
                        {/* page 2 */}
                        <div className="item">
                            <img src={appImage10} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage7} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage9} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage6} alt="Screenshot" />
                        </div>
                        <div className="item">
                            <img src={appImage4} alt="Screenshot" />
                        </div>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default AppScreen;
