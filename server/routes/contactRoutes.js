import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save Contact

router.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get Contacts

router.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;