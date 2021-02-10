import React from 'react';
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CTAThree from '../components/CTAThree';
import Contact from '../components/Contact';
import Services from '../components/Services';
import FunFact from '../components/FunFact';
import AppScreen from '../components/AppScreen';

const HomePage = () => (
    <div>
        <Preloader />
        <Layout pageTitle="MealMatch.io">
            <Header
                btnClass="main-nav__btn"
                extraClassName="site-header-one__fixed-top"
            />
            <MobileMenu />
            <Banner />
            <Services />
            <FunFact />
            <AppScreen />
            <Contact />
            <CTAThree />
            <Footer />
        </Layout>
    </div>
);

export default HomePage;
