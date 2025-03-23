require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://yourfrontend.com" })); // Adjust for allowed origins

// MongoDB Connection
if (!process.env.MONGODB_URL) {
  console.error("MONGODB_URL is not defined. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
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
if (!process.env.SWTP_USER || !process.env.SWTP_PASS || !process.env.ADMIN_EMAIL) {
  console.error("SMTP credentials are missing. Check your .env file.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SWTP_USER,
    pass: process.env.SWTP_PASS,
  },
});

// Save message & send confirmation email
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "We Received Your Message!",
      text: `Hello ${name},\n\nThank you for reaching out! We've received your message and will respond soon.\n\nBest Regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message saved & confirmation email sent!" });
  } catch (error) {
    console.error("Error saving message:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Admin replies to a message
app.post("/reply", async (req, res) => {
  const { messageId, reply } = req.body;

  if (!messageId || !reply) {
    return res.status(400).json({ success: false, message: "Message ID and reply are required" });
  }

  if (!mongoose.Types.ObjectId.isValid(messageId)) {
    return res.status(400).json({ success: false, message: "Invalid message ID" });
  }

  try {
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }

    message.adminReply = reply;
    await message.save();

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: message.email,
      subject: "Reply to Your Message",
      text: `Hello ${message.name},\n\nAdmin's Response:\n${reply}\n\nBest Regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Reply sent to user!" });
  } catch (error) {
    console.error("Error sending reply:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});