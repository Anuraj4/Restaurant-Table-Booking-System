import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onChange, value }) => (
  <Calendar onChange={onChange} value={value} />
);

export default CalendarView;
