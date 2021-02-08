import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import AppleTouch from '../assets/images/favicons/apple-touch-icon.png';
import Favicon32 from '../assets/images/favicons/favicon-32x32.png';
import Favicon16 from '../assets/images/favicons/favicon-16x16.png';
import SafariPinnedTab from '../assets/images/favicons/safari-pinned-tab.svg';

const Layout = (props) => {
    const [scrollTop, setScrollTop] = useState(false);

    const handleScrollTop = () => {
        if (window.scrollY > 100) {
            setScrollTop(true);
        } else if (window.scrollY < 100) {
            setScrollTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollTop);
        return () => {
            window.removeEventListener('scroll', handleScrollTop);
        };
    });

    return (
        <div>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <title>{props.pageTitle}</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={AppleTouch}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={Favicon32}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={Favicon16}
                />
                <link rel="mask-icon" href={SafariPinnedTab} color="#5bbad5" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="page-wrapper">{props.children}</div>

            {scrollTop && (
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className={'scroll-to-top'}
                >
                    <i className="fa fa-angle-up" />
                </ScrollLink>
            )}
        </div>
    );
};

export default Layout;
