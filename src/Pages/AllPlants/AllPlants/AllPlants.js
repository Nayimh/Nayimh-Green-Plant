import React from 'react';
import Footer from '../../Footer/Footer';
import NavMenu from '../../Home/Navbar/NavMenu';
import ExplorePlants from '../ExplorePlants/ExplorePlants';


const AllPlants = () => {
    return (
        <div>
            <NavMenu />
            <ExplorePlants />
            <Footer/>
        </div>
    );
};

export default AllPlants;