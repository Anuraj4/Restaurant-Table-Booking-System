const BookingSummary = ({ booking }) => (
  <div>
    <h2>Booking Summary</h2>
    <p>Name: {booking.name}</p>
    <p>Contact: {booking.contact}</p>
    <p>Date: {booking.date}</p>
    <p>Time: {booking.time}</p>
    <p>Guests: {booking.guests}</p>
  </div>
);

export default BookingSummary;
