import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import HomePlants from '../AllPlants/HomePlants/HomePlants/HomePlants';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
// import NavMenu from './Navbar/NavMenu';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    return (
        <div>
            {/* <NavMenu /> */}
            <Banner />
            <HomePlants />
            <div data-aos='fade-right' data-aos-duration='1000'>
            <AboutUs />
            </div>
            <div data-aos='fade-left' data-aos-duration='1000'>
            <Contact/>
            </div>
            
            
            <Footer/>
        </div>
    );
};

export default Home;