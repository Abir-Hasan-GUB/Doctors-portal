import React from 'react';
import BabyTeth from '../../../images/BabyTeth.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className="row mb-5 mt-5">
                <div className="col-md-5 float-left">
                    <img className="img-fluid featureTreatemntImg" src={BabyTeth} alt="BabyTeth" />
                </div>
                <div className="col-md-7 float-left">
                    <h1 style={{ color: 'rgb(58, 66, 86' }}>Exceptional Dental <br />
                    Care, on Your Terms</h1>
                    <p className="text-secondary pt-5 pb-5 w-75">It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsumis that it has
                    a more-or-less normal distribution of letters,as opposed
                    to using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages
                    and web page </p>
                    <button className = "btn apoinmentBtn">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;