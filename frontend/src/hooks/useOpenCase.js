import { useState } from 'react';
import { apiRequest } from '../api/client.js';

export const useOpenCase = () => {
  const [opening, setOpening] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const openCase = async (caseId) => {
    setOpening(true);
    setResult(null);
    setError(null);
    try {
      const data = await apiRequest(`/cases/${caseId}/open`, {
        method: 'POST',
      });
      setResult(data.result);
      return data.result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setOpening(false);
    }
  };

  return {
    opening,
    result,
    error,
    openCase,
  };
};
