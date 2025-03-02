// src/components/Notification.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // adjust backend URL if needed

const Notification = () => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    socket.on('notification', (data) => {
      setNotification(data.message);
      // Clear notification after a delay if desired
      setTimeout(() => setNotification(''), 5000);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  if (!notification) return null;

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', background: '#ffc', padding: '1rem' }}>
      {notification}
    </div>
  );
};

export default Notification;
