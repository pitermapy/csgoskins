import { getAuth } from 'firebase-admin/auth';
import { firebaseApp } from '../config/firebase.js';

export const requireAuth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Brak tokenu.' });
  }

  const token = header.replace('Bearer ', '');
  try {
    const decoded = await getAuth(firebaseApp).verifyIdToken(token);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Nieprawidłowy token.' });
  }
};

export const requireAdmin = (req, res, next) => {
  if (!req.user?.admin) {
    return res.status(403).json({ message: 'Brak uprawnień admina.' });
  }
  return next();
};
