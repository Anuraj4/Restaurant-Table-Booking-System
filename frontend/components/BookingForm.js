import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import BookingSummary from './BookingSummary';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    guests: ''
  });

  const [bookingDetails, setBookingDetails] = useState(null); // State for storing successful booking details

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tablebookingbackend-zrr4.onrender.com', formData);

      // Show success toast notification
      toast.success('Table booked successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      });

      // Set booking details for summary
      setBookingDetails(formData);

      // Clear the form fields
      setFormData({
        name: '',
        contact: '',
        date: '',
        time: '',
        guests: ''
      });
    } catch (err) {
      console.error(err);
      // Show error toast notification
      toast.error('Error creating booking. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <button type="submit">Book</button>
      </form>

      {/* Toast Container */}
      <ToastContainer />

      {/* Show Booking Summary Only After Successful Booking */}
      {bookingDetails && <BookingSummary booking={bookingDetails} />}
    </div>
  );
};

export default BookingForm;
