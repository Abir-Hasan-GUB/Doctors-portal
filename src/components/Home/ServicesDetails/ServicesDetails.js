import React from 'react';

const ServicesDetails = ({sarvice}) => {
    return (
        <div className="col-md-4 text-center"> 
            <img style={{height:'50px'}} src={sarvice.img} alt=""/>
            <h5 className="mt-3 mb-3">{sarvice.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quis!</p>
        </div>
    );
};

export default ServicesDetails;