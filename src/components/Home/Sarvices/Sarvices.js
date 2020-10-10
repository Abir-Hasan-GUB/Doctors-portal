import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whiteanin from '../../../images/whiteanin.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flouride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth whitening',
        img: whiteanin,
    },
]

const Sarvices = () => {
    return (
        <section className ="services-container mt-5 container abir">
          <div className="text-center sarviceResponsive">
          <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services we provide</h2>
          </div>
          <div className = "d-flex justify-content-center">
           <div className="w-75 row mt-5 pt-3 ">
           {
               serviceData.map(sarvice => <ServicesDetails sarvice = {sarvice}></ServicesDetails>)
           }
           </div>
       </div>
        </section>
    );
};

export default Sarvices;