import React, { useState } from "react";
import ReservationSlots from "../components/ReservationSlots";

function Reservations() {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    guests: 1,
    occasion: "Birthday",
  });

  const availableSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      date: formData.date,
      guests: formData.guests,
      occasion: formData.occasion,
      time: selectedSlot,
    };

    // Add the new reservation to the reservations array
    setReservations([...reservations, newReservation]);

    setFormData({ date: "", guests: 1, occasion: "Birthday" });
    setSelectedSlot("");
  };

  return (
    <div className="main-grid">
      <h1>This is the Reservations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {/* Time Slot Selection */}
        <ReservationSlots
          availableSlots={availableSlots}
          selectedSlot={selectedSlot}
          onSlotSelect={handleSlotSelection}
        />

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!selectedSlot}
        />
      </form>

      {/* Reservation Table */}
      <h2>Reservations List</h2>
      {reservations.length > 0 ? (
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.guests}</td>
                <td>{reservation.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reservations made yet.</p>
      )}
    </div>
  );
}

export default Reservations;
