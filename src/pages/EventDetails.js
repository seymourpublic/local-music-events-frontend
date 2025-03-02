// src/pages/EventDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await API.get(`/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error('Error fetching event details', err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading event details...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {new Date(event.date_time).toLocaleString()}</p>
      <p>Ticket Price: ${event.ticket_price}</p>
      {/* Additional event details go here */}
    </div>
  );
};

export default EventDetails;
