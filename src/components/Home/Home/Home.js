import React from 'react';
import Contacts from '../../Contacts/Contacts';
import Footer from '../../Contacts/Contacts';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Hader/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
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
            <Blog></Blog>
            <OurDoctors></OurDoctors>
            <Contacts></Contacts>

        </div>
    );
};

export default Home;