import React, { useEffect, useState } from 'react';
import UserPanel from '../components/UserPanel.jsx';
import Feedback from '../components/Feedback.jsx';
import { apiRequest } from '../api/client.js';

const defaultProfile = {
  balance: 1200,
  inventory: [],
  history: [],
};

const Dashboard = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    apiRequest('/users/me')
      .then((data) => {
        if (active) {
          setProfile(data.profile);
          setStatus('ready');
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message);
          setStatus('error');
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (status === 'loading') {
    return <Feedback status="info" message="Ładowanie danych profilu..." />;
  }

  if (status === 'error') {
    return (
      <Feedback status="error" message={`Błąd: ${error}`} />
    );
  }

  return <UserPanel profile={profile} />;
};

export default Dashboard;
