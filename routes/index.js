import express from 'express';
import Contacts from './contacts.js';
import swaggerRouter from './swagger.js';
import { version } from '../server.js';

const router = express.Router();

router.use("/", swaggerRouter);

router.get('/', (req, res) => {
  //#swagger.tags = ['Hello World']
  res.send('Welcome to the home page!');
});

router.get('/version', (req, res) => {
  //#swagger.tags = ['Version']
  res.send(`This is version ${version}`);
});

router.use('/contacts', Contacts);

export default router;