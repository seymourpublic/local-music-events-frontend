import React, { useEffect, useState } from 'react';
import API from '../services/api'; // or your event service
import './Home.css';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Example: Fetch events from your backend
    const fetchEvents = async () => {
      try {
        const response = await API.get('/events'); // Adjust endpoint as needed
        setEvents(response.data);
      } catch (err) {
        console.error('Failed to fetch events', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="home-container">
      <div className="event-grid">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <div className="image-placeholder">
              {/* Replace this with a real image if your event has one */}
              <img 
                src="https://via.placeholder.com/150/EEE/CCC?text=Image"
                alt="Event placeholder"
              />
            </div>
            <div className="card-content">
              <h3>{event.name}</h3>
              <p className="price">${event.ticket_price || 0}</p>
              <p className="datetime">
                {new Date(event.date_time).toLocaleString()}
              </p>
              <button className="rsvp-button">RSVP</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
