import express from 'express';
import Contacts from './contacts.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

router.use('/contacts', Contacts);

export default router;