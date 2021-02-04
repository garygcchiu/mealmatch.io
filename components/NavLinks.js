import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavLinks = () => {
    const [dropdownStatus, setDropdownStatus] = useState(false);
    const handleDropdownStatus = () => {
        setDropdownStatus(!dropdownStatus);
        console.log(dropdownStatus);
    };
    return (
        <ul className="main-nav__navigation-box">
            <li>
                <ScrollLink
                    activeClass={'current'}
                    to={'home'}
                    smooth
                    duration={500}
                >
                    Home
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    activeClass="current"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Features
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    activeClass="current"
                    to="screens"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Screens
                </ScrollLink>
            </li>
            <li className="dropdown">
                <ScrollLink
                    activeClass="current"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact
                </ScrollLink>
            </li>
        </ul>
    );
};

export default NavLinks;
