import React from "react";

const BookingSlot = ({ time, isAvailable }) => {
  return (
    <div>
      <p>{time}</p>
      <p>{isAvailable ? "Available" : "Booked"}</p>
    </div>
  );
};

export default BookingSlot;
