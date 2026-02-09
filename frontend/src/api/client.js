const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001/api';

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody.message || 'Wystąpił błąd API.';
    throw new Error(message);
  }

  return response.json();
};
