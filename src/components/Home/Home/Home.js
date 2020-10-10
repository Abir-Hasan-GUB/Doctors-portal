import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Hader/Header';
import Sarvices from '../Sarvices/Sarvices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sarvices></Sarvices>
            <FeaturedService></FeaturedService>
        </div>
    );
};

export default Home;