import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contacts from '../Contacts/Contacts';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;