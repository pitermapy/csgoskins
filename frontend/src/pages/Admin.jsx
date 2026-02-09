import React, { useEffect, useState } from 'react';
import AdminPanel from '../components/AdminPanel.jsx';
import Feedback from '../components/Feedback.jsx';
import { apiRequest } from '../api/client.js';

const Admin = () => {
  const [stats, setStats] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    Promise.all([apiRequest('/stats'), apiRequest('/admin/suggestions')])
      .then(([statsData, suggestionData]) => {
        if (active) {
          setStats(statsData);
          setSuggestions(suggestionData);
        }
      })
      .catch((err) => {
        if (active) setError(err.message);
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return <Feedback status="error" message={error} />;
  }

  if (!stats || !suggestions) {
    return <Feedback status="info" message="Ładowanie danych admina..." />;
  }

  return <AdminPanel stats={stats} suggestions={suggestions} />;
};

export default Admin;
