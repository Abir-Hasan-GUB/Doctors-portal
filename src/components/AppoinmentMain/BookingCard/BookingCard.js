import React from 'react';
import './BookingCard.css';

const BookingCard = ({booking}) => {
    return (
        <div class="card-deck col-md-4 mt-5">
  <div class="card bookingCard">
    <div class="card-body text-center">
      <h4 class="card-title">{booking.subject}</h4>
      <h6 class="card-text mt-3">{booking.visitingHour}</h6>
      <p class="card-text"><small class="text-muted">{booking.totalSpace} SPACES AVAILABLE</small></p>
      <button class="btn mt-3">BOOK APPOINMENT</button>
    </div>
  </div>
</div>
    );
};

export default BookingCard;