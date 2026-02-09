export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Nie znaleziono zasobu.' });
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Błąd serwera.' });
};
