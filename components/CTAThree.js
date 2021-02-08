import React from 'react';
import { Container } from 'react-bootstrap';

import Cta3Shape1 from '../assets/images/shapes/cta-three-bg-1-1.png';
import Cta3Shape2 from '../assets/images/shapes/cta-three-bg-1-2.png';

const CTAThree = () => {
    return (
        <section className="cta-three" id={'cta-three'}>
            <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
            <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
            <Container className="text-center">
                <h3>Stop Thinking and Start Eating!</h3>
                <div className="cta-three__btn-wrap">
                    {/* <a href="#" className="cta-three__btn"> */}
                    {/*    <i className="fa fa-play" /> */}
                    {/*    <span>Get in</span> */}
                    {/*    <b>Google Play</b> */}
                    {/* </a> */}
                    <div href="" className="cta-three__btn">
                        <i className="fab fa-apple" />
                        <span>Coming soon</span>
                        <b>App Store</b>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTAThree;
