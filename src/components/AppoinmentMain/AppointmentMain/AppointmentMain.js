import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

import './AppointmentMain.css';

const AppointmentMain = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        console.log(date)
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange = {handleDateChange}></AppointmentHeader>
            <BookAppointment date = {selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentMain;