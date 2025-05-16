import express from 'express';
import Contacts from './contacts.js';
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

router.get('/version', (req, res) => {
  res.send(`This is version ${process.env.VERSION}`);
});

router.use('/contacts', Contacts);

export default router;