import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  const handleReplySubmit = async () => {
    if (!selectedMessage || !reply) return;

    try {
      await fetch("http://localhost:5000/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId: selectedMessage._id, reply }),
      });

      alert("Reply sent successfully!");
      setReply("");
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>User Messages</h2>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg._id} className={`message-item ${selectedMessage === msg ? "active" : ""}`} onClick={() => setSelectedMessage(msg)}>
            <p><strong>{msg.name}</strong></p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      {selectedMessage && (
        <div className="message-details">
          <h3>Reply to {selectedMessage.name}</h3>
          <textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Type your reply here"></textarea>
          <button onClick={handleReplySubmit}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;