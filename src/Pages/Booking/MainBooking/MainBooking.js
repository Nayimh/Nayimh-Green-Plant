import React from 'react';
import Footer from '../../Footer/Footer';
import NavMenu from '../../Home/Navbar/NavMenu';
import Booking from '../Booking/Booking';

const MainBooking = () => {
    return (
        <div>
            <NavMenu/>
            <Booking />
            <Footer/>
        </div>
    );
};

export default MainBooking;