import React from 'react';
import Doctor from '../../../images/Doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div id="Appointment" style={{ marginTop: '100px' }} className='container'>
            <div className="row mb-5 mt-5">
                <div className="col-md-5 float-left apointmentDiv">
                    <img className="img-fluid doctorImg" src={Doctor} alt="Doctor" />
                </div>
                <div className="col-md-7 float-left apointmentDiv d-flex align-items-center">
                   <div>
                   <h5  className="pt-5" style={{color: 'rgb(28, 199, 193)'}}>APPOINMENT</h5>
                    <h1 className="ml-1 text-white">Make an appointment <br />
                    Today</h1>
                    <p className="text-white pt-3 pb-5 w-75">It is a long established fact that a reader will be distractedby the readable
                    content of a page when looking at its </p>
                    <button className="btn apoinmentBtn">Learn More</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;