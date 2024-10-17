import React from "react";
import "../assets/css/reservationSlots.css";

function ReservationSlots({ availableSlots, selectedSlot, onSlotSelect }) {
  return (
    <div className="slot-select-container">
      <label htmlFor="slot-select">Choose a Time Slot</label>
      <select
        id="slot-select"
        value={selectedSlot}
        onChange={(e) => onSlotSelect(e.target.value)}
        required
      >
        <option value="">Select a time slot</option>
        {availableSlots.map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ReservationSlots;
