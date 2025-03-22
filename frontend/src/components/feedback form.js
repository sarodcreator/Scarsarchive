import React, { useState } from "react";

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const adminEmail = "admin@example.com"; // Replace with the actual admin email
    const subject = encodeURIComponent("User Feedback");
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}`);

    // Open user's email client
    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    // Send confirmation email via backend
    try {
      const response = await fetch("http://localhost:5000/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: formData.email, userName: formData.name }),
      });

      const data = await response.json();
      if (data.success) {
        alert("A confirmation email has been sent to you!");
      } else {
        alert("Failed to send confirmation email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;