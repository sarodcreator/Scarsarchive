const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/contactMessages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  adminReply: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youradmin@gmail.com",
    pass: "yourpassword",
  },
});

// Save message & send confirmation email
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    const mailOptions = {
      from: "youradmin@gmail.com",
      to: email,
      subject: "We Received Your Message!",
      text: `Hello ${name},\n\nThank you for reaching out! We've received your message and will respond soon.\n\nBest Regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message saved & confirmation email sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Admin replies to a message
app.post("/reply", async (req, res) => {
  const { messageId, reply } = req.body;

  try {
    const message = await Message.findById(messageId);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });

    message.adminReply = reply;
    await message.save();

    const mailOptions = {
      from: "youradmin@gmail.com",
      to: message.email,
      subject: "Reply to Your Message",
      text: `Hello ${message.name},\n\nAdmin's Response:\n${reply}\n\nBest Regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Reply sent to user!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});