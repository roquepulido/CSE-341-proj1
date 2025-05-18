import { getDatabase } from "../data/database.js";
import { ObjectId } from "mongodb";

export const getAll = async (req, res) => {
  //#swagger.tags = ["Contacts"];
  console.log("Fetching all contacts");
  try {
    const db = getDatabase().db("project_1").collection("contacts");
    const result = await db.find().toArray();
    res.header("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send("Error retrieving contacts");
    console.error("Error retrieving contacts:", err);
  }
};

export const getById = async (req, res) => {
  //#swagger.tags = ["Contacts"];
  console.log("Fetching contact with ID:", req.params.id);
  const { id } = req.params;
  try {
    const db = getDatabase().db("project_1").collection("contacts");
    const result = await db.findOne({ _id: new ObjectId(id) });
    if (!result) {
      res.status(404).send("Contact not found");
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send("Error retrieving contact");
    console.error("Error retrieving contact:", err);
  }
};

export const create = async (req, res) => {
  //#swagger.tags = ["Contacts"];
  console.log("Creating new contact");
  console.log("Request body:", req.body);
  const { firstName, lastName, email, favoriteColor, birthDate } = req.body;
  try {
    const db = getDatabase().db("project_1").collection("contacts");
    const result = await db.insertOne({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthDate,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error creating contact");
    console.error("Error creating contact:", err);
  }
};

export const update = async (req, res) => {
  //#swagger.tags = ["Contacts"];
  console.log("Updating contact with ID:", req.params.id);
  console.log("Request body:", req.body);
  const { id } = req.params;
  const { firstName, lastName, email, favoriteColor, birthDate } = req.body;
  try {
    const db = getDatabase().db("project_1").collection("contacts");
    const result = await db.updateOne(
      { _id: new ObjectId(id) },
      { $set: { firstName, lastName, email, favoriteColor, birthDate } }
    );
    if (result.matchedCount === 0) {
      res.status(404).send("Contact not found");
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send("Error updating contact");
    console.error("Error updating contact:", err);
  }
};

export const remove = async (req, res) => {
  //#swagger.tags = ["Contacts"];
  console.log("Deleting contact with ID:", req.params.id);
  const { id } = req.params;
  try {
    const db = getDatabase().db("project_1").collection("contacts");
    const result = await db.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).send("Contact not found");
      return;
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting contact");
    console.error("Error deleting contact:", err);
  }
};
