import { useEffect, useState } from 'react';
import { apiRequest } from '../api/client.js';

export const useCases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    apiRequest('/cases')
      .then((data) => {
        if (active) setCases(data.cases || []);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { cases, loading, error };
};
