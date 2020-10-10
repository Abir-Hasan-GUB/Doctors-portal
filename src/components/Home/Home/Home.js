import React from 'react';
import Appointment from '../Appointment/Appointment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Hader/Header';
import Sarvices from '../Sarvices/Sarvices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sarvices></Sarvices>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;