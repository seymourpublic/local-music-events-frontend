// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import API from '../services/api';
import EventCard from '../components/EventCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get('/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Local Music Events</h1>
      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
          onClick={() => navigate(`/events/${event._id}`)}
        />
      ))}
    </div>
  );
};

export default Home;
