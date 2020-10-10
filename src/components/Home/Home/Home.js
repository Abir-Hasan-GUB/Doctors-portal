import React from 'react';
import Appointment from '../Appointment/Appointment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Hader/Header';
import Sarvices from '../Sarvices/Sarvices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sarvices></Sarvices>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;