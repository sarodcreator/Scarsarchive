import React, { useEffect, useState } from "react";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");

  const fetchMessages = () => {
    fetch(`${API_BASE_URL}/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  };

  useEffect(fetchMessages, []);

  const handleReplySubmit = async () => {
    if (!selectedMessage || !reply.trim()) return;

    try {
      const res = await fetch(`${API_BASE_URL}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId: selectedMessage._id, reply }),
      });

      if (!res.ok) throw new Error("Failed to send reply");

      alert("Reply sent successfully!");
      setReply("");

      // Refresh messages after replying
      fetchMessages();
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply. Please try again.");
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>User Messages</h2>
      <div className="message-list">
        {messages.map((msg) => (
          <div 
            key={msg._id} 
            className={`message-item ${selectedMessage?._id === msg._id ? "active" : ""}`} 
            onClick={() => setSelectedMessage(msg)}
          >
            <p><strong>{msg.name}</strong></p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      {selectedMessage && (
        <div className="message-details">
          <h3>Reply to {selectedMessage.name}</h3>
          <textarea 
            value={reply} 
            onChange={(e) => setReply(e.target.value)} 
            placeholder="Type your reply here"
          />
          <button onClick={handleReplySubmit} disabled={!reply.trim()}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;