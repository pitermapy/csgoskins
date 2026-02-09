import React from 'react';

const styles = {
  info: 'border-white/10 bg-white/5 text-white/70',
  success: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  error: 'border-rose-400/30 bg-rose-500/10 text-rose-200',
};

const Feedback = ({ status = 'info', message, className = '' }) => (
  <div
    className={`rounded-lg border px-4 py-3 text-sm ${styles[status]} ${className}`}
  >
    {message}
  </div>
);

export default Feedback;
