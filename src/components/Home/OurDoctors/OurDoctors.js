import React from 'react';
import doctorImg from '../../../images/doctorSmart.jpg';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OurDoctors.css';

const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

const OurDoctors = () => {
    return (
        <div className = "container">
            <div className="text-center sarviceResponsive blogText">
                <h5 style={{ color: '#1CC7C1' }}>Our Doctors</h5>
            </div>
            <div className="doctorsCards">
            <div class="card-deck">
  <div class="card">
    <img className = "card-img-top"src={doctorImg} alt="doctorImg"/>
    <div class="card-body text-center">
      <h5 class="card-title">Dr. Caudi</h5>
      <p class="card-text"><span className="mr-2 phoneIcon">{phoneIcon}</span>+61 452 200 126</p>
    </div>
  </div>

 <div class="card">
    <img className = "card-img-top"src={doctorImg} alt="doctorImg"/>
    <div class="card-body text-center">
      <h5 class="card-title">Dr. Caudi</h5>
      <p class="card-text"><span className="mr-2 phoneIcon">{phoneIcon}</span>+61 452 200 126</p>
    </div>
  </div>

  <div class="card">
    <img className = "card-img-top"src={doctorImg} alt="doctorImg"/>
    <div class="card-body text-center">
      <h5 class="card-title">Dr. Caudi</h5>
      <p class="card-text"><span className="mr-2 phoneIcon">{phoneIcon}</span>+61 452 200 126</p>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default OurDoctors;