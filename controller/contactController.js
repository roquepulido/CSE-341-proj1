import { getDatabase } from "../data/database.js";
import { ObjectId } from "mongodb";

export const getAll = async (req, res) => {
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