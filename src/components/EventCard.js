// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem' }}>
      <h3>{event.name}</h3>
      <p>Date: {new Date(event.date_time).toLocaleString()}</p>
      <p>Price: ${event.ticket_price}</p>
    </div>
  );
};

export default EventCard;
