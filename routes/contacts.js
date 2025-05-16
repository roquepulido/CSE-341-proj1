import express from "express";
import {
  getAll,
  getById,
  create,
  remove,
  update,
} from "../controller/contactController.js";

const Contacts = express.Router();

Contacts.get("/", getAll);
Contacts.get("/:id", getById);
Contacts.post("/", create);
Contacts.put("/:id", update);
Contacts.delete("/:id", remove);

export default Contacts;
