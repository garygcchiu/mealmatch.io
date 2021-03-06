import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import mailgo from 'mailgo';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/apton-icons.css';
import '../assets/css/animate.min.css';
import 'swiper/swiper-bundle.min.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // init wowjs animations
        if (typeof window !== 'undefined') {
            window.WOW = require('wow.js');
        }
        new WOW(
            {
                live: false,
            },
            []
        ).init();

        // init mailgo
        mailgo();

        // init react google-analytics
        ReactGA.initialize('UA-189001941-2');
        ReactGA.pageview('/');
    });
    return <Component {...pageProps} />;
}
