import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/apton-icons.css';
import '../assets/css/animate.min.css';
import 'swiper/swiper-bundle.min.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import 'react-modal-video/css/modal-video.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.WOW = require('wow.js');
        }
        new WOW(
            {
                live: false,
            },
            []
        ).init();
    });
    return <Component {...pageProps} />;
}
