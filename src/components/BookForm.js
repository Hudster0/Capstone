import React, { useState, useReducer } from "react";
import { fetchAPI,submitAPI } from "./global.js";
// Define reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Implement logic to update times based on the selected date
      return action.times; // For now, return the same times regardless of the date
    default:
      return state;
  }
};

const BookForm = ({ initializeTimes, setAvailableSlots }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };

      const isSubmitted = await window.submitAPI(formData);

      if (isSubmitted) {
        // Handle successful submission
      } else {
        // Handle submission failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error as needed
    }
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    initializeTimes(newDate); // Call initializeTimes directly
    setDate(newDate);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookForm;
