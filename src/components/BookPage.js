import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookingSlot from "./BookingSlot";

const BookPage = () => {
  const [existingBookedSlots, setExistingBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    // Initialize available slots when the component mounts
    initializeTimes(new Date());
  }, []);

  const initializeTimes = async (selectedDate) => {
    try {
      const availableTimes = await window.fetchAPI(selectedDate);
      setAvailableSlots(availableTimes);
    } catch (error) {
      console.error("Error fetching available times:", error);
      // Handle error as needed
    }
  };

  return (
    <>
      <div className="bookpage">
        <h1>
          DON'T WAIT...
          <br />
          RESERVE A SPOT NOW!
        </h1>
        <BookForm
          initializeTimes={initializeTimes}
          setAvailableSlots={setAvailableSlots}
          existingBookedSlots={existingBookedSlots}
          setExistingBookedSlots={setExistingBookedSlots}
        />
        <div className="existingBookingSlots">
          <h2>Existing Booked Slots</h2>
          {existingBookedSlots.map((slot, index) => (
            <BookingSlot key={index} time={slot.time} isAvailable={false} />
          ))}
        </div>
        <div className="availableBookingSlots">
          <h2>Available Slots</h2>
          {availableSlots.map((time, index) => (
            <BookingSlot key={index} time={time} isAvailable={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookPage;
