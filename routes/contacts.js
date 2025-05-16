import express from 'express';
import { getAll, getById } from '../controller/contactController.js';

const Contacts = express.Router();

Contacts.get('/', getAll);
Contacts.get('/:id', getById);

export default Contacts;