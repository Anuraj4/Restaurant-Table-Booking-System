import { useState } from 'react';
import '../styles/globals.css';

const BookingSummary = ({ booking }) => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false); // Hide the toast when clicked
  };

  if (!booking || !showToast) return null; // If no booking or toast is hidden, render nothing

  return (
    <div className="container">
      <div className="toastHeader">
        <h2 className="title">Booking Summary</h2>
        <button className="closeButton" onClick={handleClose}>X</button>
      </div>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Contact:</strong> {booking.contact}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Guests:</strong> {booking.guests}</p>
    </div>
  );
};

export default BookingSummary;
