import React from 'react';
import AboutUs from '../AboutUs/AboutUs';

// import ExplorePlants from '../AllPlants/ExplorePlants/ExplorePlants';
import HomePlants from '../AllPlants/HomePlants/HomePlants/HomePlants';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import NavMenu from './Navbar/NavMenu';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <Banner />
            <HomePlants />
            <AboutUs />
            {/* <ExplorePlants/> */}
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;